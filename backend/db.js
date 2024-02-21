const mongoose = require('mongoose');

const mongoDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Nutrition');
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

    if (data && data.length > 0) {
      const Data = data[0].Workout;
      return Data;
    } else {
 
      console.error('No workout data found');
      return [];
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};



module.exports = { mongoDB, getWorkoutData };
