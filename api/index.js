import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import reservationRoute from "./routes/reservation.js"
import cookieParser from "cookie-parser"


const app = express();
dotenv.config();

const connect = async () =>{

try {
    await mongoose.connect(process.env.MONGO);
    console.log("connect to mongoBD")
  } catch (error) {
    throw error;
  }
};

//This is to show message if or if not its connected to mnogodb
mongoose.connection.on("disconnected", ()=>{
    console.log("mnogoDB disconnected!")
})

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", authRoute);
app.use("/api/reservation", authRoute);



app.listen(8800, () =>{
    connect()
    console.log("connected to backend!!@@@@!.")
})