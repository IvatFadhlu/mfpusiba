const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: process.env.PG_NAME,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  dialect: "postgres",
});

module.exports = { sequelize };
