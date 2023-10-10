import mongoose from "mongoose";

const connect = async () => {
  const mongoUrl = process.env.MONGO_URL || "";
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoUrl);
  } catch (error: any) {
    throw new Error("connection failed");
  }
};

export default connect;
