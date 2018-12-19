let router = require('express').Router()
let Decks = require('../models/deck')

//GET
// @ts-ignore
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

router.get('/mydecks', (req, res, next) => {
  // @ts-ignore
  Decks.find({ authorId: req.session.uid })
    .then(decks => {
      res.send(decks)
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
      // @ts-ignore
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
// @ts-ignore
router.delete('/:id', (req, res, next) => {
  Decks.findById(req.params.id)
    .then(deck => {
      // @ts-ignore
      if (!deck.authorId.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!")
      }
      deck.remove()
      res.send({ message: "Belorted" })
    })
})



module.exports = router