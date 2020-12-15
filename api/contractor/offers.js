import {sql, config, router} from "../db";

router.use('/contractor/offers', (req, res) => {
  const contractorID = req.body.contractorID;
  sql.connect(config).then(() => {
    return sql.query(`SELECT * FROM Offer WHERE contractorID = '${contractorID}'`)
  }).then(result => {
    console.info(result)
    res.send(result)
  }).catch(err => {
    console.warn("Nie można pobrać danych z bazy")
  })

})

module.exports = router
