const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if (connection) {
      console.log('Connected to the database');
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
