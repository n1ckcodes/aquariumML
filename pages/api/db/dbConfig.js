const pgp = require("pg-promise")({
  noWarnings: true,
});

let ssl = null;
if (process.env.NODE_ENV === "development") {
  ssl = false;
} else {
  ssl = { rejectUnauthorized: false };
}

console.log(process.env.NODE_ENV);
const config = {
  max: 30,
  connectionString:
    process.env.DB_URI || "postgres://postgres:root@localhost:5432/aqml",
  ssl: ssl,
};

const db = pgp(config);

module.exports = {
  db,
};
