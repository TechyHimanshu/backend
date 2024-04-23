const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    goal: { type: mongoose.Schema.Types.ObjectId, ref: 'Goal', required: true },
    title: { type: String, required: true },
    frequency: { type: String, required: true },
    quantity:{ type: Number, required: true }
});

module.exports = mongoose.model('Task', taskSchema);
