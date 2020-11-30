const sql = require('mssql')
const { Router } = require('express')
const router = Router();
const config = {
  user: "", // TO CHANGE (SQL SERVER AUTH USER)
  password: "", // TO CHANGE
  server: "", // TO CHANGE (SQL SERVER NAME)
  port: 1433,
  database: "", // TO CHANGE (SQL DATABASENAME)
}

module.exports = {sql, config, router}
