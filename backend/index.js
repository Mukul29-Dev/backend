const express = require('express');
const mongoose = require('mongoose');
const { mongoDB, getWorkoutData } = require('./db');
const cors = require('cors');

const app = express();
const port = 5000;

// Connect to MongoDB
mongoDB().catch(error => process.exit(1)); // Exit if MongoDB connection fails

app.use(express.json());
app.use(cors());

const workoutSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String
  }
});

const Workout = mongoose.model('Workout', workoutSchema);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/workout', async (req, res) => {
  try {
    await mongoDB();
    const data = await getWorkoutData();

    const page = req.query.page;
    const limit = req.query.limit;
    const total = data.length;

    startIndex = parseInt(page - 1) * limit;
    lastIndex = parseInt(page) * limit;

    const dataResult = data.slice(startIndex, lastIndex);

    res.json({ data: dataResult, total: total });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).send('Internal Server Error');
  }
});
