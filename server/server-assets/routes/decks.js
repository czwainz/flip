let router = require('express').Router()
let Decks = require('../models/deck')

//GET
router.get('/', (req, res, next) => {
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
      res.send(deck)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//POST
router.post('/', (req, res, next) => {
  // @ts-ignore
  req.body.authorId = req.session.uid
  Decks.create(req.body)
    .then(newDeck => {
      res.send(newDeck)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//PUT
router.put('/:deckId', (req, res, next) => {
  Decks.findById(req.params.deckId)
    .then(deck => {
      if (!deck.authorId.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!")
      }
      deck.update(req.body, (err) => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Deck Successfully Updated")
      });
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//DELETE

module.exports = router