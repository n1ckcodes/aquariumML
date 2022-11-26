import nc from "next-connect";
import { withSessionRoute } from "helpers/ironSession";
import { createTank } from "pages/api/db/tankQueries";
const { validate } = require("jsonschema");

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

//Get single users tanks
handler.get("/api/tanks/:userId/tanks", async (req, res) => {});

//Get single user tank by ID
handler.get("/api/tanks/:userId/tank/:tankId", async (req, res) => {});

//Update specific tank owned by a user
handler.put("/api/tanks/:userId/tank/:tankId", async (req, res) => {});

//Create a new tank
handler.post("/api/tanks/add", async (req, res) => {
  if (!req.session.user){
    res.status(401).send('Not logged in.')
  }
  const { userId, name, size, type, location, dateStarted} = req.body

  if (req.session.user.uid != userId){
    res.status(401).send('Unable to add tank.')
  }

  await createTank(userId, name, size, type, location, dateStarted)
  return res.status(201).send("Tank added.");
});

export default withSessionRoute(handler);
