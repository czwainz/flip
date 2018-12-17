let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Card'


let schema = new Schema({
  title: { type: String, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  deckId: { type: ObjectId, ref: 'Deck', required: true },
  front: { type: String, required: true },
  back: { type: String, required: true }
}, { timestamps: true })


module.exports = mongoose.model(schemaName, schema)