import mongoose , {Schema} from "mongoose";



const userSchema = mongoose.Schema({
    name: {
        type : String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        trim: true
    },
    profile : {
        type : String,
        unique : true  
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    age: {
        type: Number,
        default: 18
    },
    gender: {
        type: String,
        default: "male"
    },
    contact: {
        type: Number,
        required: true
    
    }
},{
    timestamps : true
})



export const User = mongoose.model("User" , userSchema )