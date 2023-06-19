const express = require("express");
const cron = require("node-cron");
const nodemailer = require("nodemailer");
const { append } = require("express/lib/response");
const mssql = require("mssql");
const config = require("./config/config");
const mailer = require("./Email/email2");

const app = express();
app.use(express.json());

// app.post('/send', (req, res) => {
//     const output =
//         <p>A new user signed up!</p>
//         <h3>New User Details:</h3>
//         <ul>
//             <li>Full Name:</li>
//             <li>Username:</li>
//             <li>Phone Number:</li>
//             <li>Email:</li>
//         </ul>
// })

mssql
  .connect(config)
  .then((pool) => {
    if (pool.connecting) {
      console.log("DB Connecting!");
    }
    if (pool.connected) {
      console.log("DB Connected!");
    }
  })
  .catch((e) => console.log(e));

const port = 6000;
app.listen(port, () => {
  console.log("Express server running");
  console.log("cron");
  cron.schedule("*/5 * * * * *", () => {
    mailer();
  });
});
