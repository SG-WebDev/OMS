import {sql, config, router} from "../db";

router.use('/client/ratings', (req, res) => {
  const clientID = req.body.clientID;
  console.log(clientID);
  sql.connect(config).then(() => {
    return sql.query(`SELECT * FROM Rating WHERE clientID = '${clientID}'`)
  }).then(result => {
    res.send({success: result});
  }).catch(err => {
    console.warn(err)
    res.send({error: err});
  })

})

module.exports = router
