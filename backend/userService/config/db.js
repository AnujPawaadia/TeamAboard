import mongoose from "mongoose";

const url=process.env.MONGO_URL;

const connectToDb=async()=>
{
    try {
        await mongoose.connect(url);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); 
    }
}

export default connectToDb;