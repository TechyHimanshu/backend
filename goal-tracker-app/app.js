const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const goalRoutes = require('./routes/goalRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/goal_tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => {
    console.log('Connected to database');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(err => console.error(err));

app.use('/users', userRoutes);
app.use('/goals', goalRoutes);
app.use('/tasks', taskRoutes);
