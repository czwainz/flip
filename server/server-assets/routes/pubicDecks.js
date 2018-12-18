let router = require('express').Router()
let Decks = require('../models/deck')

//GET
router.get('/public', (req, res, next) => {
  Decks.find({})
    .then(decks => {
      res.send(decks.filter(deck => deck.public))
    })
    .catch(err => {
      console.log(err)
      next()
    })
})



module.exports = router