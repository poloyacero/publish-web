export default function (req, res) {
  require("dotenv").config();
  const cors = require("cors")({ origin: true });

  let nodemailer = require("nodemailer");
  console.log("password:", process.env.PASSWORD);
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    // SMTP is unlike most network protocols, which only have a single port number.
    // SMTP has at least 3. They are port numbers 25, 587, and 465.
    // Port 25 is still widely used as a **relay** port from one server to another.
    // Port for SSL: 465
    // Port for TLS/STARTTLS: 587
    port: 465,
    //  if true the connection will use TLS when connecting to server. If false (the
    // default) then TLS is used if server supports the STARTTLS extension. In most
    // cases set this value to true if you are connecting to port 465. For port 587 or
    // 25 keep it false
    secure: true, // use TLS
    auth: {
      user: "admin@thepublishing.com",
      pass: process.env.PASSWORD,
    },
  });

  const mailData = {
    to: "admin@thepublishing.com", // String or array of strings ['You <you@example.com>', 'another@example.com']
    from: "admin@thepublishing.com", // String
    cc: "gb@thepublishing.com,js@thepublishing.com", //CC
    subject: "Create Print Book and Ebook € 350",
    text: "Hi Im" + req.body.name,
    html: `<div>Creating Print Book and Ebook € 350<br/><br/>
       Is your manuscript ready? ${req.body.manuscriptready}<br/><br/>        
       <br/>
       Is your manuscript professionally edited? ${req.body.manuscriptedited}<br/><br/>
       <br/>
       Attachements:
       `,
    attachments: [
      {
        // file on disk as an attachment
        path: `${req.body.manuscriptfile}`, // stream this file
      },
    ],
  };

  transporter.sendMail(mailData, (err, data) => {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
      console.log("mail not sent");
    } else {
      console.log("mail send");
      res.send("success");
    }
  });
}
