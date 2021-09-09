export default function (req, res) {
  const cors = require("cors")({ origin: true });

  let nodemailer = require("nodemailer");

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
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  const mailData = {
    to: "admin@thepublishing.com", // String or array of strings ['You <you@example.com>', 'another@example.com']
    from: "admin@thepublishing.com", // String
    cc: "gb@thepublishing.com,js@thepublishing.com", //CC
    subject: `Services Request by ${req.body.user}`,
    text: "Hi Im" + req.body.user,
    html: `<div><h3>Book Details</h3><br/><br/>
      <b> Book Title:</b> ${req.body.booktitle}<br/>        
       <br/>
       <b>Book Synopis:</b> <br/>${req.body.booksynopsis}<br/><br/>
       <br/>
       <b>Package:</b>${req.body.package1}<br/><br/>
       <b>Additional Services:</b><br/><br/>
       <b>Editing:</b><br/>
       ${req.body.editorialvalue}
       ${req.body.lineeditingvalue}
       ${req.body.developmentalvalue}
       ${req.body.contenteditvalue}
       ${req.body.copyeditingvalue}
       ${req.body.prooflvalue}
       ${req.body.indexingvalue}
       ${req.body.dataentryvalue}
       ${req.body.textformatvalue}
       <br/><b>Design:</b><br/>
       ${req.body.illustrationsvalue}
       ${req.body.coverdesignvalue}
       ${req.body.interiordesignvalue}
       ${req.body.bookdescvalue}
       ${req.body.hardbackvalue}       
       <br/><b>Distribution:</b><br/>
       ${req.body.printbookvalue}
       ${req.body.ebookdistvalue}
       ${req.body.copyrightvalue}
       ${req.body.isbnvalue}<br/>
       <br/><b>Marketing:</b><br/>
       ${req.body.websitevalue}
       ${req.body.audiobookvalue}       
       ${req.body.videobookvalue}
       ${req.body.pressreleasevalue}
       ${req.body.authoreventsvalue}
       ${req.body.printadsvalue}
       ${req.body.royaltyprogvalue}
       ${req.body.salesheetsvalue} 
       ${req.body.socialmediavalue}
       ${req.body.boreprogvalue}
       ${req.body.socialmedia30value}
       ${req.body.socialmedia90value}
       ${req.body.socialmediaxtvalue}
       ${req.body.inflightvalue}
       ${req.body.publishersvalue}
       ${req.body.exhibitvalue}
       ${req.body.bookvideopremvalue}
       ${req.body.bookreviewvalue}
       ${req.body.hollywoodpitchvalue}
       ${req.body.hollywoodscreenvalue}
       ${req.body.publicityvalue}
           <br/>
            Email: ${req.body.email}   <br/>  
       Attachements:
       `,
    attachments: [
      {
        // filename and content type is derived from path
        path: `${req.body.imageUrl}`,
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
