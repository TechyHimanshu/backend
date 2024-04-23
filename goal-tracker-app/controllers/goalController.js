const Goal = require('../models/Goal');

exports.createGoal = async (req, res) => {
    try {
        const { title,deadline } = req.body;
        const newGoal = await Goal.create({ title, user: req.userId, deadline });
        res.status(201).json(newGoal);
    } catch (error) {
        console.error('Error creating goal:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getGoals = async(req,res)=>{

    try {
        const goals = await Goal.find({ user: req.userId})
        res.status(200).json(goals)
    } catch (error) {
        console.error('Error fetching goal:', error);
        res.status(500).json({ error: 'Server error' });
    }
   
}
