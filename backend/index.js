const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;
const mongoDB = require('./db');

mongoDB();

const userSchema = new mongoose.Schema();

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



app.get('/workout', async (req, res) => {
  try {
    const users = await Workout.find({});
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).send('Internal Server Error');
  }
});