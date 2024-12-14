
import { asyncHandler } from '../utils/asyncHandler.js'
import { apiError } from '../utils/apiError.js'
import { apiResponse } from '../utils/apiResponse.js'
import { User } from '../models/user.model.js'


const registerUser = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body;

    if (
        [username, email, password].some((field) => field?.trim() === "")
    ) {
        throw new apiError(404, "Every field is required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    }); 
    
    if (existedUser) {
        throw new apiError(405, "User already exists");
    }
    

    const newuser = await User.create({
        username,
        email ,
        password
    })


    const createduser = await User.findById(newuser._id).select(
        "-password -email"
    )

    if(!createduser){
        throw new apiError(500 , "server error")
    }

    return res.status(201).json(
        new apiResponse(200 , createduser , "New user added")
    )


})







const loginUser = asyncHandler(async (req , res)=>{


    const {email , password} = req.body;

    if([email , password].some((field)=>field?.trim() === "")){
        throw new apiError(302 , "All Field Required")
    }

    const foundUser = await User.findOne({ email })

    if(!foundUser){
        throw new apiError(304 , "Email doen't exists")
    }

    const checkPassword = await foundUser.isCorrectPassword(password);

    if(!checkPassword){
        throw new apiError(308 , "invalid password")
    }

    const createduser = await User.findById(foundUser._id).select(
        "-password -email"
    )

    if(!createduser){
        throw new apiError(500 , "server error")
    }

    return res.status(201).json(
        new apiResponse(200 , createduser , "Loggin succesfully")
    )

})









export {registerUser , loginUser};