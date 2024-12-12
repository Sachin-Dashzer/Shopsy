import mongoose from "mongoose";
import dotenv from "dotenv";
import {DB_NAME} from "../constants.js";


dotenv.config({
    path : './.env'
})


const dbConnection = async ()=>{

    try{

        const dbServer = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Database connected succesfully ${dbServer.connection.host}`)
    }
    catch(error){
        throw error
        process.exit(1)
    }

    
}



export default dbConnection

