import { db } from "./dbConfig";

const createUser = (email, username, pwhash) => {
  return db
    .query(
      `INSERT INTO "User"("email", "username", "password") VALUES($1, $2, $3)`,
      [email, username, pwhash]
    )
    .then(() => {
      return true;
    })
    .catch((e) => {
      if (e.code == 23505 && e.constraint == "user_username_un") {
        return "Username already in use";
      }
      if (e.code == 23505 && e.constraint == "user_email_un") {
        return "Email already in use";
      }
    });
};

const getUserByUsername = (username) => {
  return db
    .one(`SELECT * from "User" WHERE "username" = $1`, [username])
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
  createUser,
  getUserByUsername,
};
