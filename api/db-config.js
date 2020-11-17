const sql = require('mssql')
const config = {
  user: "dbTest",
  password: "test",
  server: "SG-PC",
  port: 1433,
  database: "Northwind",
}

sql.connect(config).then(() => {
  return sql.query`select * from Region`
}).then(result => {
  console.dir(result)
}).catch(err => {
  // ... error checks
})

