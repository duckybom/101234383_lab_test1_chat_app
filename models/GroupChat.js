const mongoose = require('mongoose')

const GroupChatSchema = new mongoose.Schema({
    from_user: {
        type: String,
        required: [true, "Please enter username"]
    },
    room: {
        type: String,
        required: [true, "Please enter room"]
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

module.exports = mongoose.model('GroupChats', GroupChatSchema);