import nc from "next-connect";
import { addEvent, getEventsByTankID, getAllEvents } from "../db/eventQueries";
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

handler.post("/api/event/new", (req, res) => {
  const { tankID, type, waterAmt, fertilizerAmt, comments, date } = req.body;
  //dateStarted = dayjs(dateStarted).format('yyyy-mm-dd')
  if (date == undefined || type == undefined || tankID == undefined) {
    return;
  }
  return addEvent(tankID, type, waterAmt, fertilizerAmt, date, comments).then(
    () => {
      return res.status(201).send("Event added successfully");
    }
  );
});

handler.get("/api/event/tank/:id", (req, res) => {
  const { id } = req.params;
  return getEventsByTankID(id).then((response) => {
    return res.send(response);
  });
});

handler.get("/api/event/all", (req, res) => {
  console.log("here");
  return getAllEvents().then((response) => {
    return res.send(response);
  });
});

//TODO: set up default route handling
handler.get((req, res, next) => {
  console.log("here lol");
  console.log(req.url);
  const { method } = req;

  res.end("This matches whatever route");
});

export default handler;
