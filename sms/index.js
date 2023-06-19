const express = require("express");
require("dotenv").config();

const app = express();

const credentials = {
  apiKey: process.env.API_KEY,
  username: process.env.APP_USERNAME,
};

const Africastalking = require("africastalking")(credentials);

const sms = Africastalking.SMS;
const options = {
  to: "+254707135245",
  message: " This is Joy. ",
};

sms
  .send(options)
  .then((response) => {
    console.log(response);
  })

  .catch((error) => {
    console.log(error);
  });

app.listen(4000, () => {
  console.log("Running on Port 4000");
});
