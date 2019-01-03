let router = require('express').Router()
let Decks = require('../models/deck')
let Cards = require('../models/card')
let Rating = require('../models/rating')

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
  Promise.all([
    Decks.findById(req.params.deckId),
    Cards.find({ deckId: req.params.deckId }),
    Rating.find({ deckId: req.params.deckId })
  ])
    .then(deck => {
      deck[0].cards = deck[1]
      deck[0].rating = deck[2]
      res.send(deck[0])
    })
    .catch(err => {
      console.log(err)
      next()
    })
})


module.exports = router