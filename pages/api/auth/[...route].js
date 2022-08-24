import nc from "next-connect";
import { withSessionRoute } from "../../../helpers/ironSession";
import { createUser, getUserByUsername } from "../db/userQueries";
import { loginSchema, registrationSchema } from "./constants";
const { validate } = require("jsonschema");
const bcrypt = require("bcrypt");

const handler = nc({
  attachParams: true,
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Server error.");
  },
  onNoMatch: (req, res) => {
    console.log(req);
    res.status(404).end("Page not found.");
  },
});

handler.post("/api/auth/register", async (req, res) => {
  const result = validate(req.body, registrationSchema);

  if (!result.valid) {
    return res.status(400).json(result.errors.map((err) => err.stack));
  }

  const { username, password, email } = req.body;
  const saltRounds = 10;
  const pwhash = await bcrypt.hash(password, saltRounds).then(function (hash) {
    return hash;
  });
  return createUser(email, username, pwhash)
    .then(() => {
      return res.status(201).send("Registered successfully");
    })
    .catch((e) => {
      return res.send(e.toString());
    });
});

handler.post("/api/auth/login", async (req, res) => {
  const result = validate(req.body, loginSchema);
  if (!result.valid) {
    return res.status(400).json(result.errors.map((err) => err.stack));
  }
  const { username, password } = req.body;
  return getUserByUsername(username).then(async (user) => {
    if (!user) {
      return res.status(401).end("Invalid username or password");
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        req.session.user = {
          uid: user.user_id,
          username: user.username,
        };
        await req.session.save();
        return res.status(200).end("Logged in");
      } else {
        return res.status(401).end("Invalid username or password");
      }
    }
  });
});

export default withSessionRoute(handler);
