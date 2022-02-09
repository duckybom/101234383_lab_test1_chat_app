const mongoose = require('mongoose')

const PrivateMessageSchema = new mongoose.Schema({
    from_user: {
        type: String,
        required: [true, "Please enter username"]
    },
    to_user: {
        type: String,
        required: [true, "Please enter username"]
    },
    message: {
        type: String,
        required: [true, "Please enter message"]
    },
    date_sent: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('PrivateMessages', PrivateMessageSchema);