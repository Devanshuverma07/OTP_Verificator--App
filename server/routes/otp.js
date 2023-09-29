const express = require("express");
const router = express.Router();
const {handleGenerateOTP, handleVerify}= require('../controller/otp')

router.post("/",handleGenerateOTP);
router.post("/verify",handleVerify);


module.exports=router;