import {sql, config, router} from "../db";

router.post('/offers/view', (req, res) => {
  const offerID = req.body.offerID;
  sql.connect(config).then(() => {
    return sql.query(`SELECT * FROM Offer WHERE OfferID = '${offerID}'`)
  }).then(result => {
    res.send({success:result});
  }).catch(err => {
    console.warn(err)
    res.send({error: err});
  })
})

module.exports = router
