const mongoose = require('mongoose');

const mongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/Nutrition', );

    console.log('Connected to MongoDB');

    const collection = mongoose.connection.collection('workout');

    const data = await collection.find({}).toArray();
    console.log('Fetched data:', data);

    // Access data inside each document
    data.forEach((document) => {
      console.log('Document ID:', document._id);
      console.log('Workout Data:');
      document.Workout.forEach((workout) => {
        console.log('Workout ID:', workout.id);
        console.log('Workout Title:', workout.title);
        console.log('Workout Image:', workout.img);
        console.log('Workout Description:', workout.description);
        // Access other fields as needed
      });
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = mongoDB;
