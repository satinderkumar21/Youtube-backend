import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET','POST','DELETE','PUT'],
    credentials: true
}))

// app.use(express.json({limit:"16kb"}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(express.static("public"))
app.use(cookieParser())

// console.log("first--2")
// app.get("/", (req,res)=>{
//     console.log(" in / route")
//     res.status(200).send("Hello from Server");
// })

//routes import
import userRouter from './routes/user.routes.js'


// routes declartion
app.use("/api/v1/users", userRouter)

//http://localhost:80001/api/v1/users/register

export default app;