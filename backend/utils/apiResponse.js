
class apiResponse{

    constructor(statusCode , data , massage = "succesfully" ){


        this.statusCode = statusCode 
        this.data = data
        this.massage = massage
        this.success = statusCode < 400


    }
}


export {apiResponse}