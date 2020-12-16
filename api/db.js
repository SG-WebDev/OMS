const sql = require('mssql')
const { Router } = require('express')
const router = Router();

const config = {
  user: "dbTest", // TO CHANGE (SQL SERVER AUTH USER)
  password: "test", // TO CHANGE
  server: "SG-PC", // TO CHANGE (SQL SERVER NAME)
  port: 1433,
  database: "oms", // TO CHANGE (SQL DATABASE NAME)
}

module.exports = {sql, config, router}
