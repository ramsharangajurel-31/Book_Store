const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.error('Make sure MongoDB is installed .');
    
    // Continue running the application even if MongoDB connection fails
    // This allows the application to start and function without database connectivity
  }
};

module.exports = connectDB;

