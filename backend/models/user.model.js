import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs"


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique : true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: String,
        default: "user"
    },
    refreshToken: {
        type: String
    }
}, {
    timestamps: true
})


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}






export const User = mongoose.model("User", userSchema)