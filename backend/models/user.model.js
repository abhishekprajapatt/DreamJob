import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['student',''],
        required:true
    },
    profile:{
        bio:{
            type:String,
        },
        skills:{
            type:String,
        },
        resume:{
            type:String,
        }
    }
})


