let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Summary'


let schema = new Schema({
  authorId: { type: ObjectId, ref: 'User', required: true },
  deckId: { type: ObjectId, ref: 'Deck', required: true },
  deckName: { type: String, required: true },
  score: { type: Number, required: true }
}, { timestamps: true })


module.exports = mongoose.model(schemaName, schema)