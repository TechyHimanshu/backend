const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    deadline:{ type: String, required: true }
    // other goal fields
});

module.exports = mongoose.model('Goal', goalSchema);
