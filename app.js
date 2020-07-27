const usernames = require("./usernames");
var cron = require("node-cron");
const cred = require('./login.json');
const instagramPosts = require("instagram-posts");
const db = require("./db");
var nodemailer = require("nodemailer");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/notifier",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connected! :)");
  }
);

cron.schedule("*/5 * * * * *", () => {
    var post = [];
  
    //run loop for number of usernames
    for (let i = 0; i < usernames.length; i++) {
      (async () => {
          //get latest instagram posts of a specific user 
        post[i] = await instagramPosts(usernames[i]);
  
        //check if timestamp of recenet post is in db
        db.exists({ time: post[i][0].time }, (err, doc) => {
          if (doc) {
            console.log("No new post available");
          }
  
          if(err){
              console.log(err);
          }
          //if time is not saved in db save time and dont return any new post
          if (!doc) {
            //save timestamp in db to make sure post has been checked
            new db({ time: post[i][0].time }).save().then(() => {
              //after saving notify user there is a new post
              //Notify user via mail that someone uploaded new post
              
              //auth
              var transporter = nodemailer.createTransport({
                service: "gmail",
                secure: false,
                auth: {
                  user: cred.usergmail,
                  pass: cred.userpass,
                },
              });
  
              //get mail options
              var mailOptions = {
                from: "'" + cred.usergmail + "'",
                to:  "'" + cred.to + "'", //needs not to be in quotes
                subject: "'" + "New Post Update" + "'",
                text:
                  usernames[i] +
                  " just uploaded new post check out here ==> " +
                  post[i][0].display_url,
              };
  
              //send the mail
              transporter.sendMail(mailOptions, function (err, info) {
                if (err) console.log(err);
                else console.log(info);
              });
  
              console.log(
                usernames[i] +
                  " Just uploaded link ===> " +
                  post[i][0].display_url
              );
            });
          }
        });
      })();
    }
  });

