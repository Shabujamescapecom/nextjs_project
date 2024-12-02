'use server'
import mongoose from "mongoose";

const dbConnect = async () => {
    console.log(process.env.MONGO_URI);
    
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Register",
    });
    console.log(`MongoDB Connected : ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;