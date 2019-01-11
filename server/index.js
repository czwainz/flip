var express = require('express')
var bp = require('body-parser')
var server = express()
var cors = require('cors')
var PORT = process.env.PORT || 3000

server.use(express.static(__dirname + "/../client/dist"))

var whitelist = ['http://localhost:8080', 'https://flipflashcards.herokuapp.com/'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))

//Fire up database connection
require('./server-assets/db/mlab-config')


//REGISTER MIDDLEWEAR
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

//REGISTER YOUR AUTH ROUTES BEFORE YOUR GATEKEEPER, OTHERWISE YOU WILL NEVER GET LOGGED IN
let auth = require('./server-assets/auth/routes')
server.use(auth.session)
server.use(auth.router)

let publicDeckRoutes = require('./server-assets/routes/publicDecks')
server.use('/api/decks/', publicDeckRoutes)

//Gate Keeper Must login to access any route below this code
server.use((req, res, next) => {
  if (!req.session.uid) {
    return res.status(401).send({
      error: 'please login to continue'
    })
  }
  next()
})

//YOUR ROUTES HERE!!!!!!
let decksRoutes = require('./server-assets/routes/decks')
server.use('/api/decks/', decksRoutes)
let CardsRoutes = require('./server-assets/routes/cards')
server.use('/api/cards/', CardsRoutes)




//Catch all
server.use('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})


server.listen(PORT, () => {
  console.log('server running on PORT', PORT)
})