require("dotenv").config();

const dbConfig = {
  username: process.env.DB_USERNAME ?? "",
  password: process.env.DB_PASSWORD ?? "",
  database: process.env.DB_DATABASE ?? "",
  host: process.env.DB_HOST ?? "",
  dialect: "postgres",
};

module.exports = {
development: dbConfig,
production: dbConfig,
};