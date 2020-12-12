import {sql, config, router} from "../db";

let output = null;
sql.connect(config).then(() => {
  return sql.query(`SELECT * FROM Offer`)
}).then(result => {
  output = result;
  return result;
}).catch(err => {
  console.warn("Nie można pobrać danych z bazy")
})

router.use('/offers', (req, res) => {
  res.json(output)
})

module.exports = router
