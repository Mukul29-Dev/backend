const mongoose = require('mongoose');


const mongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/Nutrition',);

    console.log('Connected to MongoDB');

    const collection = mongoose.connection.collection('workout');

    const data = await collection.find({}).toArray();

    // Access data inside each document
    data.forEach((document) => {
      console.log('Document:', document.workout);
      // Access individual fields like document.fieldName
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};


module.exports = mongoDB;
