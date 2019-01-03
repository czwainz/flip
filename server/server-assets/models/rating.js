let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Rating'



let schema = new Schema({
  rating: { type: Number, required: true },
  userId: { type: ObjectId, ref: 'User', required: true },
  deckId: { type: ObjectId, ref: 'Deck', required: true }
}, { timestamps: true })



module.exports = mongoose.model(schemaName, schema)