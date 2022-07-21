import { db } from "./dbConfig";

const createUser = (email, username, pwhash) => {
  return db.query(
    `INSERT INTO aqml."user"("email", "username", "password") VALUES($1, $2, $3)`,
    [email, username, pwhash]
  );
};

const getUserByUsername = (username) => {
    try {
      return db.one(
        `SELECT * from aqml."user" WHERE "username" = $1`,
        [username]
      );
    } catch (e) {
      console.log(e);
    }
  }

module.exports = {
  createUser,
  getUserByUsername
};
