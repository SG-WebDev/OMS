import {sql, config, router} from "../db";

router.put('/offers/proposals/accept', (req, res) => {
  const offerID = req.body.offerID;
  const contractorID = req.body.contractorID;
  sql.connect(config).then(() => {
    return sql.query(`EXEC ConfirmOfferProposal
    @varOfferID = '${offerID}',
    @varcontractorID = '${contractorID}'`)
  }).then(result => {
    res.send({success:result});
  }).catch(err => {
    console.warn(err)
    res.send({error: err});
  })
})

module.exports = router
