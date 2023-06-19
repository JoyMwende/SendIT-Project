const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
let transporter = nodemailer.createTransport({

  host: "smtp.gmail.com",
  secure:false,
  requireTLS:true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});


let mailOptions = {
  from: process.env.EMAIL,
  to: "mwendejoy921@gmail.com",
  subject: "Intern Meeting",
  html: '<div style="backgroundColor:gray  color:white"> <h1 style="color:red">Meeting </h1> <br/><br/><p>Hello Friends find attached meeting info</p><br/><br/><br/> <br/><img src="https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062__480.png"> </div>',
  text: "That was easy!",

  attachments: [
    {
      filename: "first.txt",
      content:
        "Meeting: Interns Meeting Time: 100:00Pm Topic:Redux Guest : Jonathan Ndambuki",
    },
  ],
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
app.listen("6000", () => console.log("server  started ...."));
