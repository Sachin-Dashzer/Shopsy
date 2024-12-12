import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

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





export default app;