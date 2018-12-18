let router = require('express').Router()
let Summarys = require('../models/summary')





//GET
router.get('/:deckId', (req, res, next) => {
  // @ts-ignore
  Summarys.find({ deckId: req.params.deckId })
    .then(summarys => {
      res.send(summarys)
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
  Summarys.create(req.body)
    .then(newSummary => {
      res.send(newSummary)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})


//PUT
router.put('/:id', (req, res, next) => {
  Summarys.findById(req.params.id)
    .then(summary => {
      // @ts-ignore
      if (!summary.authorId.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!")
      }
      summary.update(req.body, (err) => {
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










module.exports = router