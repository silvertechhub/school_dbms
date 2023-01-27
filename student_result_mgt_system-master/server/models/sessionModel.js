const mongoose = require('mongoose')

const sessionModel = mongoose.Schema({

    session: {
        type: String,
        required: true
    }
},{timestamps:true})

module.exports = mongoose.model('session', sessionModel)