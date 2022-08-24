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
  const pwhash = await bcrypt.hash(password, saltRounds).then((hash) => {
    return hash;
  });

  return createUser(email, username, pwhash)
    .then((response) => {
      if (response === true) {
        return res.status(201).send({
          status: "ok",
          msg: "Registered successfully",
        });
      } else {
        return res.status(200).send({
          status: "failure",
          msg: response,
        });
      }
    })
    .catch((e) => {
      console.log(e)
      return res.status(500).send("Registration error please try again.");
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
