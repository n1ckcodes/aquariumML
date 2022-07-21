import nc from "next-connect";
import { createUser } from '../db/userQueries'
const bcrypt = require('bcrypt');


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
console.log('here')
  const saltRounds = 10;
  const pwhash = await bcrypt.hash(password, saltRounds).then(function(hash) {
    return hash;
    // Store hash in your password DB.
});
  return createUser(email, username, pwhash).then(() => {
    return res.status(201).send("Registered successfully");
  });
});

handler.get("/api/tank/all", (req, res) => {
  return getTanks().then((response) => {
    return res.send(response);
  });
});

handler.get("/api/tank/:id", (req, res) => {
  console.log("here")
  console.log(req.session)
  return res.send(req.session.user)
  const { id } = req.params;
  return getTankById(id).then((response) => {
    return res.send(response);
  });
});

//TODO: set up default route handling
handler.get((req, res, next) => {
  console.log(req.url);
  const { method } = req;

  res.end("This matches whatever route");
});

export default withSessionRoute(handler);