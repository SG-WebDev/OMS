import {sql, config, router} from "../db";

router.post('/client/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  sql.connect(config).then(() => {
    return sql.query(`SELECT * FROM Client WHERE email = '${email}' AND password = '${password}'`)
  }).then(result => {
    console.info(result)
    res.send(result)
  }).catch(err => {
    console.warn("Nie można pobrać danych z bazy")
  })
})

module.exports = router
