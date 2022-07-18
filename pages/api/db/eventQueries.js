import { db } from "./dbConfig";

const addEvent = (
  tankID,
  type,
  waterChgAmt,
  fertilizerAmt,
  eventDate,
  comments
) => {
  return db.query(
    `INSERT INTO "Event"("TankID", "Type", "WaterChgAmt", "FertilizerAmt", "EventDate", "Comments") VALUES($1, $2, $3, $4, $5, $6)`,
    [tankID, type, waterChgAmt, fertilizerAmt, eventDate, comments]
  );
};

const getEventsByTankID = (tankID) => {
  try {
    return db.any(
      `SELECT * from "Event" WHERE "TankID" = $1 ORDER BY "EventDate" DESC`,
      [tankID]
    );
  } catch (e) {
    console.log(e);
  }
};

const getAllEvents = () => {
  try {
    return db.any(`SELECT * from "Event" ORDER BY "EventDate" DESC`, []);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  addEvent,
  getEventsByTankID,
  getAllEvents,
};
