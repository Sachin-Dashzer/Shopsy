import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
})


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
        "Content-Type",
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma'
    ]
}));


app.use(cookieParser());
app.use(express.json({limit: '18kb'}));
app.use(express.urlencoded({extended: true, limit: '18kb'}));
app.use(express.static('public'));




import authRouter from './routes/auth.router.js'


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use('/auth', authRouter);



export default app;