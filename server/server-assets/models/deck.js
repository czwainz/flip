let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Deck'


let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  public: { type: Boolean, required: true, default: true },
  tags: { type: String, required: true },
  color: { type: String, required: true }
}, { timestamps: true })


module.exports = mongoose.model(schemaName, schema)