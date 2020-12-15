import {sql, config, router} from "../db";

router.use('/offers', (req, res) => {
  sql.connect(config).then(() => {
    return sql.query(`SELECT * FROM Offer`)
  }).then(result => {
    console.info(result)
    res.send(result)
  }).catch(err => {
    console.warn("Nie można pobrać danych z bazy")
  })

})

module.exports = router
