const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title cannot be blank!']
    },
    text: {
        type: String,
        required: [true, 'text cannot be blank!']
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema);