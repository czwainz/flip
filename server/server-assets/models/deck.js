let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Deck'

let Cards = require('./card')
let Summarys = require('./summary')


let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  public: { type: Boolean, required: true, default: true },
  tags: { type: String, required: true },
  color: { type: String, required: true },
  review: { type: Number }
}, { timestamps: true })


schema.pre('remove', function (next) {
  //find all the cards and summarys and remove them
  // @ts-ignore
  Promise.all([
    Cards.deleteMany({ deckId: this._id }),
    Summarys.deleteMany({ deckId: this.id })
  ])
    .then(() => next())
    .catch(err => next(err))
})




module.exports = mongoose.model(schemaName, schema)