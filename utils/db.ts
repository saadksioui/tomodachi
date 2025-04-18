import mongoose from "mongoose";

const connection = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
      throw new Error("MONGO_URL is not defined in the environment variables");
    }

    await mongoose.connect(mongoUrl)
    console.log('Connect');
  } catch (error) {
    console.log(error);
  }
}

export default connection