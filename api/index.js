const express = require('express')
const app = express()

if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

//JSON middleware.
app.use(express.json());

//FILES REGISTRATION
//------------------------------------------
const offers = require('./offer/offers')
app.use(offers)
//------------------------------------------
const contractorLogin = require('./contractor/login')
app.use(contractorLogin)
//------------------------------------------
const clientLogin = require('./client/login')
app.use(clientLogin)
//------------------------------------------

module.exports = app
