import {sql, config, router} from "../db";

router.use('/rating/list', (req, res) => {
  const contractorID = req.body.contractorID;
  sql.connect(config).then(() => {
    return sql.query(`SELECT Contractor.firstname as Contractor_firstname,
      Contractor.lastname as Contractor_lastname,
      description, Client.firstname as Client_firstname,
      Client.lastname as Client_lastname
      FROM Rating INNER JOIN Contractor on Rating.contractorID=Contractor.contractorID
      INNER JOIN Client on Rating.clientID=Client.clientID
      WHERE Rating.contractorID = '${contractorID}'`);
  }).then(result => {
    res.send({success: result});
  }).catch(err => {
    console.warn(err)
    res.send({error: err});
  })

})

module.exports = router
