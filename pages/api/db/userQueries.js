import { db } from "./dbConfig";

const createUser = (email, username, pwhash) => {
  return db.query(
    `INSERT INTO aqml."user"("email", "username", "password") VALUES($1, $2, $3)`,
    [email, username, pwhash]
  );
};

module.exports = {
  createUser
};
