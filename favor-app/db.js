const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  user: "postgres",
  password: process.env.PG_PASSWORD,
  host: "localhost",
  port: 5432,
  database: favorapp,
}

const proConfig = {
  connectionString: process.env.DATABASE_URL //heroku addons
}

const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);

module.exports = pool;
