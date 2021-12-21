let mongoose = require('mongoose')
const router = require('../routes/customer')

// Add your mongoDB database connection string here
mongoose.connect(``)

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)
