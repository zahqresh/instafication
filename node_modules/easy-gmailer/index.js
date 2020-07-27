module.exports = {

sendmail:function(){

const express = require('express');
const app = express();
var prompt = require('prompt'); 
var nodemailer = require('nodemailer');
var clc = require('cli-color');

var usergmail, userpass,to_input,subject_input,text_input;
// Start the prompt
prompt.start();
//get properties from the user



console.log(clc.red.bgWhite.underline('Please visit https://myaccount.google.com/lesssecureapps first turn it on to send email using this app!'));
  console.log(clc.blueBright('Please fill the information below:'));
  prompt.get(['gmail',{name:'Password',hidden:true,replace:'*'},'to','Subject','Text'], function (err, result) {
    // Deliver the results to the varibales.
    usergmail  = result.gmail;
    to_input = result.to;
    subject_input = result.Subject;
    userpass = result.Password;
    text_input = result.Text; 
    
    console.log(clc.green('Sending mail...'));

//auth
var transporter = nodemailer.createTransport({
 service: 'gmail',
 secure:false,
 auth: {
        user: usergmail,
        pass: userpass
    }
});

//get mail options
var mailOptions = {
  from: "'"+usergmail+"'",
  to: to_input,//needs not to be in quotes
  subject: "'"+subject_input+"'",
  text: "'"+text_input+"'"
};


transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
 console.log(clc.green('mail sent!'));
});


});

}

}