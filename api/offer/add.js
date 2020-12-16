import {sql, config, router} from "../db";

router.put('/offers/add', (req, res) => {
  const clientID = req.body.clientID;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  sql.connect(config).then(() => {
    return sql.query(`INSERT INTO Offer (clientID, price, title, description)
    VALUES('${clientID}', '${price}', '${title}', '${description}')`)
  }).then(result => {
    res.send(result);
  }).catch(err => {
    console.warn(err)
    res.send(err);
  })
})

module.exports = router
