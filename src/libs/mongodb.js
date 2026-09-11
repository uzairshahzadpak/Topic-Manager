import mongoose from "mongoose";

const connectionMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected ✅");
  } catch (err) {
    console.log("MongoDB Connection Error ❌", err);
    throw err;
  }
};

export default connectionMongodb;