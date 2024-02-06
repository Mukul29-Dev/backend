const mongoose = require('mongoose');


const mongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/Nutrition', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    const collection = mongoose.connection.db.collection('workout');

    const data = await collection.find({}).toArray();
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = mongoDB;
