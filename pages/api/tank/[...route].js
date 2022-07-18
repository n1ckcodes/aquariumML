import nc from "next-connect";
import { createTank, getTanks, getTankById } from "../db/tankQueries";
import dayjs from "dayjs";

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

handler.post("/api/tank/new", (req, res) => {
  const { name, size, type, location, dateStarted } = req.body;
  //dateStarted = dayjs(dateStarted).format('yyyy-mm-dd')
  if (
    name == undefined ||
    size == undefined ||
    type == undefined ||
    location == undefined ||
    dateStarted == undefined
  ) {
    return;
  }
  return createTank(name, size, type, location, dateStarted).then(() => {
    return res.status(201).send("Tank added successfully");
  });
});

handler.get("/api/tank/all", (req, res) => {
  return getTanks().then((response) => {
    return res.send(response);
  });
});

handler.get("/api/tank/:id", (req, res) => {
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

export default handler;
