import { db } from "./dbConfig";

const createTank = (name, size, type, location, dateStarted) => {
  return db.query(
    `INSERT INTO "Tank"("UserID", "Name", "Size", "Type", "Location", "DateStarted") VALUES(1, $1, $2, $3, $4, $5)`,
    [name, size, type, location, dateStarted]
  );
};

const getTanks = () => {
  console.log('here')
  return db.any(`SELECT * from aqml."tank"`, []);
};

const getTankById = (id) => {
  try {
    return db.one(
      `SELECT * from "Tank" WHERE "TankID" = $1`,
      [id]
    );
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  createTank,
  getTanks,
  getTankById
};
