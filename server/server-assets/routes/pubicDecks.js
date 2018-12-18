let router = require('express').Router()
let Decks = require('../models/deck')
let Cards = require('../models/card')

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

router.get('/:deckId', (req, res, next) => {
  Decks.findById(req.params.deckId)
    .then(deck => {
      Cards.find({ deckId: req.params.deckId })
        .then(cards => {
          deck.cards = cards
          res.send(deck)
        })
    })
    .catch(err => {
      console.log(err)
      next()
    })
})


module.exports = router