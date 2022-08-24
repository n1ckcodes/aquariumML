import { db } from "./dbConfig";

const createUser = (email, username, pwhash) => {
  return db.query(
    `INSERT INTO aqml."user"("email", "username", "password") VALUES($1, $2, $3)`,
    [email, username, pwhash]
  );
};

const getUserByUsername = (username) => {
  return db
    .one(`SELECT * from aqml."user" WHERE "username" = $1`, [username])
    .catch((e) => {
      console.log(e)
      if (e.received == 0) {
        return false;
      } else {
        throw new Error("Login error. Please try again.");
      }
    });
};

module.exports = {
  createUser,
  getUserByUsername,
};
