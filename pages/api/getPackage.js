


export default function (req, res) {
    require('dotenv').config()
    const cors =require("cors")({origin:true})
   
    let nodemailer = require('nodemailer')
   
    const transporter = nodemailer.createTransport({
    
    service: "Gmail",
    // SMTP is unlike most network protocols, which only have a single port number. 
    // SMTP has at least 3. They are port numbers 25, 587, and 465.
    // Port 25 is still widely used as a **relay** port from one server to another.
    // Port for SSL: 465
    // Port for TLS/STARTTLS: 587
    port:465,
    //  if true the connection will use TLS when connecting to server. If false (the 
    // default) then TLS is used if server supports the STARTTLS extension. In most 
    // cases set this value to true if you are connecting to port 465. For port 587 or 
    // 25 keep it false
    secure: true, // use TLS             
         auth: {
              user: 'admin@thepublishing.com',
              pass: process.env.PASSWORD,
           },
      
    });   
    const mailData = {
        
        to: req.body.email, // String or array of strings ['You <you@example.com>', 'another@example.com']
        from: req.body.email, // String
        subject: 'Inquiry from Publishing',
        text: 'Hi Im'+req.body.name,
        html: `<div>Let’s Get Package<br/><br/>
        Hi I'm ${req.body.firstname} ${req.body.lastname}<br/><br/>        
       <br/>
        <br/><b>Your Package:</b><br/>
        ${req.body.packagevalue}<br/>      
        <br/><br/>
        <p>Sent from: ${req.body.email}</p>`
    }
  
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