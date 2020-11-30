const express = require('express')
const app = express()

if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

//FILES REGISTRATION
const clients = require('./client/clients')
app.use(clients)
//------------------------------------------

module.exports = app
