import mongoose, { connect } from "mongoose";

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected : ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error Connecting MongoDB: ${error.message}`);
    process.exit();
  }
};

export default connectMongoDB;
