
import { asyncHandler } from '../utils/asyncHandler.js'
import { apiError } from '../utils/apiError.js'
import { apiResponse } from '../utils/apiResponse.js'
import { User } from '../models/user.model.js'


const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    if (
        [name, email, password].some((field) => field?.trim() === "")
    ) {
        throw new apiError(404, "Every field is required")
    }

    const existedUser = await User.findOne({
        $or: [{ name }, { email }]
    }); 
    
    if (existedUser) {
        throw new apiError(405, "User already exists");
    }
    

    const newuser = await User.create({
        name,
        email ,
        password
    })


    const createduser = await User.findById(newuser._id).select(
        "-password -refreshToken"
    )

    if(!createduser){
        throw new apiError(500 , "server error")
    }

    return res.status(201).json(
        new apiResponse(200 , createduser , "everything good boy")
    )


})

export default registerUser;