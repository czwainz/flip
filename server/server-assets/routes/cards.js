let router = require('express').Router()
let Cards = require('../models/card')




//GET
router.get('/:deckId', (req, res, next) => {
  // @ts-ignore
  Cards.find({ deckId: req.params.deckId })
    .then(cards => {
      res.send(cards)
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
  Cards.create(req.body)
    .then(newCard => {
      res.send(newCard)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})



// //need old deckId and a new deckId
// //change http request type
// router.get('/:deckId', (req, res, next) => {
//   // @ts-ignore
//   Cards.find({ deckId: req.params.deckId })  //find by old deckId
//     .then(cards => {
//       let clones = []
//       cards.forEach(c => {
//         let clone = c
//         clone._doc._id =//import mongoose mongoose.Types.ObjectId()
//           clone._doc.deckId = //the new deck Id
//         clone._doc.authorId = //session.uid
//           clone.isNew = true
//         clone.save(e => {
//           if (e) {
//             next(e)
//           } else {
//             clones.push(clone)
//           }
//         })
//       })
//       res.send(clones)
//     })
//     .catch(err => {
//       console.log(err)
//       next()
//     })
// })




//PUT
router.put('/:id', (req, res, next) => {
  Cards.findById(req.params.id)
    .then(card => {
      // @ts-ignore
      if (!card.authorId.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!")
      }
      card.update(req.body, (err) => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Successfully Updated")
      });
    })
    .catch(err => {
      console.log(err)
      next()
    })
})


//DELETE
router.delete('/:id', (req, res, next) => {
  Cards.findById(req.params.id)
    .then(card => {
      // @ts-ignore
      if (!card.authorId.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!")
      }
      card.remove()
      res.send({ message: "Belorted" })
    })
})



module.exports = router