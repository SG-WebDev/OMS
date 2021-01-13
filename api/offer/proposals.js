import {sql, config, router} from "../db";

router.post('/offers/proposals', (req, res) => {
  const offerID = req.body.offerID;
  sql.connect(config).then(() => {
    return sql.query(`exec viewOfferProposal
    @varOfferID = '${offerID}'`)
  }).then(result => {
    res.send({success:result});
  }).catch(err => {
    console.warn(err)
    res.send({error: err});
  })
})

module.exports = router
