import {sql, config, router} from "../db";

router.use('/client/offers', (req, res) => {
  const clientID = req.body.clientID;
  console.log(clientID);
  sql.connect(config).then(() => {
    return sql.query(`SELECT * FROM Offer WHERE clientID = '${clientID}'`)
  }).then(result => {
    console.info(result)
    res.send(result)
  }).catch(err => {
    console.warn("Nie można pobrać danych z bazy")
  })

})

module.exports = router
