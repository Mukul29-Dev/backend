// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const port = 5000;
// const mongoDB = require('./db');

// mongoDB();


// const workoutSchema = new mongoose.Schema({
//     id: {
//       type: Number,
//       required: true
//     },
//     img: {
//       type: String,
//       required: true
//     },
//     title: {
//       type: String,
//       required: true
//     },
//     description: {
//       type: String,
//       required: true
//     },
//     category: {
//       type: String
//     }
//   });

//   const Workout = mongoose.model('Workout', workoutSchema);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// app.get('/workout', async (req, res) => {
//   try {
//     const users = await Workout.find({});
//     const chestWorkouts = await Workout.find({ category: 'chest' });
//     console.log('Chest Workouts:', chestWorkouts);
//   } catch (error) {
//     console.error('Error fetching users:', error.message);
//     res.status(500).send('Internal Server Error');
//   } 
// });