let router = require('express').Router()
let Decks = require('../models/deck')
let Cards = require('../models/card')

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

// COPY DECK
router.post('/copy', (req, res, next) => {
  // @ts-ignore
  req.body.authorId = req.session.uid
  // get the original deck 
  Decks.findById(req.body.origDeckId).then(origDeck => {

    // copy to a newDeck, modify author, title, public
    Decks.create({
      title: req.body.title,
      description: origDeck.description,
      authorId: req.body.authorId,
      public: req.body.public,
      tags: origDeck.tags,
      color: origDeck.color
    }).then(newDeck => {
      // Get cards from origDeck
      Cards.find({ deckId: req.body.origDeckId })
        .then(origCards => {
          // res.send(cards)
          origCards.forEach(card => {
            Cards.create({
              title: card.title,
              authorId: req.body.authorId,
              deckId: newDeck._id,
              front: card.front,
              back: card.back
            })
              .catch(err => {
                console.log('Copy card Error', err)
                next()
              })
          });
        })
        .catch(err => {
          console.log('Find original card Error', err)
          next()
        })
      res.send({ message: "Deck Successfully Copied", newDeck })
    })
      .catch(err => {
        console.log('Copy deck Error', err)
        next()
      })

  })
    .catch(err => {
      console.log('Find original deck error', err)
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
        Decks.findById(req.params.deckId).then(deck => {
          res.send({ message: "Deck Successfully Updated", deck })
        })
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