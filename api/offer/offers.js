import {sql, config, router} from "../db";

router.use('/offers/list', (req, res) => {
  sql.connect(config).then(() => {
    return sql.query(`SELECT * FROM Offer WHERE status = 'open'`)
  }).then(result => {
    res.send({success: result});
  }).catch(err => {
    console.warn(err)
    res.send({error: err});
  })

})

module.exports = router
