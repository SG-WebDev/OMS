import {sql, config, router} from "../db";

router.put('/offers/edit', (req, res) => {
  const offerID = req.body.offerID;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  sql.connect(config).then(() => {
    return sql.query(`UPDATE Offer SET price = '${price}', title = '${title}', description = '${description}' WHERE offerID = '${offerID}' and status='open'`)
  }).then(result => {
    res.send({success:result});
  }).catch(err => {
    console.warn(err)
    res.send({error: err});
  })
})

module.exports = router
