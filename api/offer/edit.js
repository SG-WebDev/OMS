import {sql, config, router} from "../db";

router.put('/offers/edit', (req, res) => {
  const offerID = req.body.offerID;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const status = req.body.status;
  sql.connect(config).then(() => {
    return sql.query(`EXEC editoffer
     @varOfferID='${offerID}',
     @varPrice='${price}',
     @varTitle='${title}',
     @varDescripton='${description}',
     @varStatus='${status}'`)
  }).then(result => {
    res.send({success:result});
  }).catch(err => {
    console.warn(err)
    res.send({error: err});
  })
})

module.exports = router
