const nodemailer = require('nodemailer');
require("dotenv").config()

module.exports = (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        host: "smtp.gmail.com",
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        },
        tls : { rejectUnauthorized: false },
        secure: true,
    });

    const from = req.body;
    const path = require("path");
    const mailDetails = {
        to: 'swagner@bluematterconsulting.com',
        from: from,
        envelope: {
            from: 'from', // used as MAIL FROM: address for SMTP
            to: 'swagner@bluematterconsulting.com, Mailer <swagner@bluematterconsulting.com>'
        },
        replyTo: from,
        subject: "You got mail",
        headers: {
            'Web Express': 'high'
        },
        date: new Date('2000-01-01 00:00:00'),
        html: `<p>Hi, I want to subscribe or get more information about your organization.</p>`,
    };
    transporter.sendMail(mailDetails, function(err, info) {
        if(err) {
            console.log(err);
        } else {
            // send alert saying message sent in #response
            console.log(info);
            res.redirect("/");
        }
    });
}