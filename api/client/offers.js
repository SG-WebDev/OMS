import {sql, config, router} from "../db";

router.use('/client/offers', (req, res) => {
  const clientID = req.body.clientID;
  console.log(clientID);
  sql.connect(config).then(() => {
    return sql.query(`SELECT * FROM Offer WHERE clientID = '${clientID}'`)
  }).then(result => {
    res.send(result);
  }).catch(err => {
    console.warn(err)
    res.send(err);
  })

})

module.exports = router
