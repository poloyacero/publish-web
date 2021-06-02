


export default function (req, res) {
    require('dotenv').config()
    const cors =require("cors")({origin:true})
   
    let nodemailer = require('nodemailer')
   
    const transporter = nodemailer.createTransport({
    
    host: "smtp.gmail.com",
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
              user: 'admin@thepublishing.com',
              pass: process.env.PASSWORD,
           },
      
    });
    console.log(req.body.message)
    const mailData = {
        // from: req.body.email,
        // replyTo:req.body.email,
        // to: 'Gabriel',
        // subject: `Message From ${req.body.name}`,
        // text: req.body.message + " | Sent from: " + req.body.email,
        // html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
        to: req.body.email, // String or array of strings ['You <you@example.com>', 'another@example.com']
        from: req.body.email, // String
        subject: 'Inquiry from Publishing',
        text: 'Hi Im'+req.body.name,
        html: `<div>Let’s Get Started<br/><br/>
        Hi I'm ${req.body.firstname} ${req.body.lastname}<br/><br/>
        Trim size:${req.body.trimsize}<br/>
        Interior Color:${req.body.interiorcolor}<br/>
        Paper Type:${req.body.papertype}<br/>
        Binding Type:${req.body.bindingtype}<br/>
        Laminate:${req.body.laminate}<br/>
        Page Count:${req.body.pagecount}<br/>
        Quantity:${req.body.quantity}<br/>
        Ship to :${req.body.shipto}<br/>
        Ship to province:${req.body.shiptoprovince}<br/>
        Printing Location:${req.body.printinglocation}<br/>
        E-book:${req.body.ebook}<br/>          
        </div>
        <br/><br/>
        <b>Additional Services:</b><br/><br/>
        <b>Editing:</b><br/>
        ${req.body.editorialvalue}<br/>
        ${req.body.lineeditingvalue}<br/>
        ${req.body.copyeditingvalue}<br/>
        ${req.body.prooflvalue}<br/>
        ${req.body.indexingvalue}<br/>
        ${req.body.dataentryvalue}<br/>
        ${req.body.textformatvalue}<br/>
        <br/><b>Design:</b><br/>
        ${req.body.illustrationsvalue}<br/>
        ${req.body.coverdesignvalue}<br/>
        ${req.body.interiordesignvalue}<br/>
        ${req.body.hardbackvalue}<br/>
        <br/><b>Distribution:</b><br/>
        ${req.body.printbookvalue}<br/>
        ${req.body.ebookdistvalue}<br/>
        ${req.body.copyrightvalue}<br/>
        ${req.body.isbnvalue}<br/>
        <br/><b>Marketing:</b><br/>
        ${req.body.websitevalue}<br/>
        ${req.body.audiobookvalue}<br/>        
        ${req.body.videobookvalue}<br/>
        ${req.body.pressreleasevalue}<br/>
        ${req.body. authoreventsvalue}<br/>
        ${req.body.printadsvalue}<br/>     
    

        <br/><br/>
        <p>Sent from: ${req.body.email}</p>`
    }
  
    transporter.sendMail(mailData, (err, data) => {
      if (err) {
        console.log(err);
        res.send("error" + JSON.stringify(err));
      } else {
        console.log("mail send");
        res.send("success");
      }
  });

  
  }