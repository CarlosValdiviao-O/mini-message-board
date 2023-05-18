const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    user: { type: String, required: true, maxLength: 100, minLength: 1 },
    text: { type: String, required: true, minLegth: 1, maxLength: 300 },
    added: { type: String, required: true }
});

// Export model
module.exports = mongoose.model("Message", MessageSchema);