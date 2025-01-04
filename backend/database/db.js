import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected Successfully...!");
    } catch (error) {
        console.log(error);
        console.log("Database Not Connected Successfully...!")
    }
}

export default connectDB;