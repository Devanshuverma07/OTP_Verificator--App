const express = require("express")
const fast2sms = require("fast-two-sms")
const cors = require('cors')
require('dotenv').config();
const { connectTOMongoDB } = require("./config/dbConnect")
const app = express()
const bodyParser = require('body-parser');
const mongoURI = process.env.MONGO_URI
const apiKey = process.env.F2S_API_KEY
const otpGenerator = require('otp-generator')
const twilio = require("twilio")
const otpRoute = require('./routes/otp')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }))
connectTOMongoDB(mongoURI)

app.get("/",(req,res)=>{
    res.send("All is well!")
} );
app.use("/otp",otpRoute);


//middlewares

//routes

//Error Handlers

//Listen to server
const PORT = process.env.PORT || 2000;
app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
