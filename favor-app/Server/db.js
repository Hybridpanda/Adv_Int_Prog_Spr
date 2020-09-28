const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  password: process.env.DB_CONNECT,
  host: "localhost",
  port: "5432",
  database: "favorapp",
});

module.exports = pool;
