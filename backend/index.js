
import app from './app.js';
import dotenv from 'dotenv';
import dbConnection from './db/index.js'

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 8000


dbConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })

    })
    .catch((error) => {
        throw error
        process.exit(1)
    })









