const mongoose = require('mongoose');
const { Schema } = mongoose;

const stringRequired = {
    type: String,
    required: true
}

const communitySchema = new Schema({
    name: stringRequired,
    tagline: stringRequired,
    description: stringRequired
}, {
    timestamps: true
})

module.exports = mongoose.model('Community', communitySchema);