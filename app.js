
var nodemailer = require ('nodemailer');

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "towa555666@gmail.com",
    pass: "gokuvssuperman123"
  }

});

var mailOptions = {
  from:"towa555666@gmail.com",
  to:"markgolah67@gmail.com",
  subject: "Hello dending email with nodemailer",
  text:"wow! That's simple"
}

transporter.sendMail(mailOptions,  function(err,info){
if(err){
  console.log(err);
}else{
  console.log('Email sent' + info.response)
}

});