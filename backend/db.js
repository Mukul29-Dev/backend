const mongoose = require('mongoose');

const mongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/Nutrition', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
};

const getWorkoutData = async () => {
  try {
    const collection = mongoose.connection.collection('workout');
    const data = await collection.find({}).toArray();
    console.log('Fetched data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

module.exports = { mongoDB, getWorkoutData };
