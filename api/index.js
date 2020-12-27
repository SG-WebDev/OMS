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
const offerView = require('./offer/view')
app.use(offerView)
//------------------------------------------
const offerAdd = require('./offer/add')
app.use(offerAdd)
//------------------------------------------
const offerEdit = require('./offer/edit')
app.use(offerEdit)
//------------------------------------------
const contractorLogin = require('./contractor/login')
app.use(contractorLogin)
//------------------------------------------
const clientLogin = require('./client/login')
app.use(clientLogin)
//------------------------------------------
const contractorOffers = require('./contractor/offers')
app.use(contractorOffers)
//------------------------------------------
const clientOffers = require('./client/offers')
app.use(clientOffers)
//------------------------------------------
const ratingList = require('./rating/list')
app.use(ratingList)
//------------------------------------------
//------------------------------------------

module.exports = app
