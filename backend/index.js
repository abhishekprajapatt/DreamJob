import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/db.js";

dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption = {
    origin: process.env.FRONTEND_URL,
    credentials:true
}
app.use(cors(corsOption));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at : ${PORT}`);
})