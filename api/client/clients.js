import {sql, config, router} from "../db";

let output = null;
sql.connect(config).then(() => {
  return sql.query(`select * from Region`)
}).then(result => {
  output = result;
  return result;
}).catch(err => {
  console.warn("Nie można pobrać danych z bazy")
})

router.use('/clients', (req, res) => {
  res.json(output)
})

module.exports = router
