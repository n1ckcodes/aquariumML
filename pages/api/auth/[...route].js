import nc from "next-connect";
import { createUser, getUserByUsername } from "../db/userQueries";
const bcrypt = require("bcrypt");

import { withSessionRoute } from "../../../helpers/ironSession";

const handler = nc({
  attachParams: true,
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    console.log(req);
    res.status(404).end("Page is not found");
  },
});

handler.post("/api/auth/register", async (req, res) => {
  const { username, password, email } = req.body;
  const saltRounds = 10;
  const pwhash = await bcrypt.hash(password, saltRounds).then(function (hash) {
    return hash;
  });
  return createUser(email, username, pwhash).then(() => {
    return res.status(201).send("Registered successfully");
  });
});

handler.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await getUserByUsername(username);

  const match = await bcrypt.compare(password, user.password);

  if (match) {
    req.session.user = {
      uid: user.user_id,
      username: user.username,
    };
    await req.session.save();
    return res.sendStatus(200);
  }
  else {
    
  }

  console.log(req.session.user);

});

export default withSessionRoute(handler);
