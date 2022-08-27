const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: { type: String, require: true},
    description: { type: String, require: true},
    year: { type: Number, require: true},
    quantity: { type: Number, require: true},
    cover: { type: String, default: 'http://placekitten.com/350/350'}
})
//export
module.exports = mongoose.model('book', bookSchema)
