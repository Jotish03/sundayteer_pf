const mongoose = require('mongoose')
const noonTeerResultSchema = mongoose.Schema({
    city: String,
    date: String,
    firstround: String,
    secondround: String
})
module.exports = mongoose.model('noonteerresult', noonTeerResultSchema)
