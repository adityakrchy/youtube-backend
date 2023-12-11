import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async ()=>{
    try{
        // console.log("MONGO_URI: ", process.env.DATABASE_URI)
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    }
    catch(err){
        console.log("MongoDB connection error: ", err)
        process.exit(1)
    }
}

export default connectDB