const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
        trim: true
    },
},{
    timestamps: true
})

const Data = mongoose.model('Data',dataSchema)

module.exports = Data