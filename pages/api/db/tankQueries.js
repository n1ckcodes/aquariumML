import { db } from "./dbConfig";

const createTank = (userId, name, size, type, location, dateStarted) => {
  return db
    .query(
      `INSERT INTO "Tank"("UserID", "Name", "Size", "Type", "Location", "DateStarted") VALUES($1, $2, $3, $4, $5, $6)`,
      [userId, name, size, type, location, dateStarted]
    )
    .then(() => {
      return true;
    })
    .catch((e) => {
        console.log({e})
    //   if (e.code == 23505 && e.constraint == "user_username_un") {
    //     return "Username already in use";
    //   }
    //   else if (e.code == 23505 && e.constraint == "user_email_un") {
    //     return "Email already in use";
    //   }
    //   else {
    //     console.log(e)
    //     throw new Error('Unknown error occurred during registration. Please try again.')
    //   }
    });
};

const getTanksByUserId = (userId) => {
    console.log(userId)
    return db
      .any(`SELECT * from "Tank" WHERE "UserID" = $1`, [userId])
      .catch((e) => {
        console.error(e);
        if (e.received == 0) {
          return false;
        } else {
          throw new Error("Login error. Please try again.");
        }
      });
  };

module.exports = {
    createTank,
    getTanksByUserId,
};
