import {sql, config, router} from "../db";

router.post('/rating/list', (req, res) => {
  const contractorID = req.body.contractorID;
  sql.connect(config).then(() => {
    return sql.query(`SELECT Contractor.firstname as Contractor_firstname,
      Contractor.lastname as Contractor_lastname,
      Rating.description,
      Client.firstname as Client_firstname,
      Client.lastname as Client_lastname,
      Offer.title
      FROM Rating INNER JOIN Contractor on Rating.contractorID=Contractor.contractorID
      INNER JOIN Client on Rating.clientID=Client.clientID
      LEFT JOIN Offer on Offer.offerID=Rating.offerID
      WHERE Rating.contractorID = '${contractorID}'`);
  }).then(result => {
    res.send({success: result});
  }).catch(err => {
    console.warn(err)
    res.send({error: err});
  })

})

module.exports = router
