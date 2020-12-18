import {sql, config, router} from "../db";

router.use('/contractor/offers', (req, res) => {
  const contractorID = req.body.contractorID;
  sql.connect(config).then(() => {
    return sql.query(`SELECT * FROM Offer WHERE contractorID = '${contractorID}'`)
  }).then(result => {
    res.send({success: result});
  }).catch(err => {
    console.warn(err)
    res.send({error: err});
  })

})

module.exports = router
