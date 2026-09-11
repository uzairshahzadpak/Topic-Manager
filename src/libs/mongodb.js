



import Topic from "@/model/topic";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const connectionMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected ✅");
  } catch (err) {
    console.log("MongoDB Connection Error ❌", err);
  }
};

export default connectionMongodb;

 
