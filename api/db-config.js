const sql = require('mssql')
const config = {
  user: "", // TO CHANGE (SQL SERVER AUTH USER)
  password: "", // TO CHANGE
  server: "", // TO CHANGE (SQL SERVER NAME)
  port: 1433,
  database: "", // TO CHANGE (SQL DATABASENAME)
}

sql.connect(config).then(() => {
  return sql.query`select * from Region`
}).then(result => {
  console.dir(result)
}).catch(err => {
  // ... error checks
})

