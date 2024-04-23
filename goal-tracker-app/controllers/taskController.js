const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    try {
        const { title, frequency, quantity } = req.body;
        const newTask = await Task.create({ title, frequency, goal: req.body.goalId, quantity });
        res.status(201).json(newTask);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getTaskForGoal = async(req,res)=>{
    try {
        const { id } = req.params
        const tasks = await Task.find({goal:id})
        res.status(200).json(tasks)
    } catch (error) {
        console.error('Error fetching task:', error);
        res.status(500).json({ error: 'Server error' });
    }
}
