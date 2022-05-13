
// other imports
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

// function for mongodb connection
export async function mongoconnection() {
    try {
        const db = await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to database");
    } catch (error) {
        console.log("error in starting the app", error);
    }
}