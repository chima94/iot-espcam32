const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    }
})


module.exports = Data =  mongoose.model('data', DataSchema)