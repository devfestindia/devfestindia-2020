const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

const transporter = nodemailer.createTransport({
    service: 'smtp.gmail.com',
    // auth: {
    //     user: "no-reply@devfestindia.com",
    //     pass: ``
    // },
    // auth: {
    //     user: functions.config().someservice.email,
    //     pass: functions.config().someservice.password
    // },
});

const sendGmailConf = async (snap) => {
    try {
        const docId = snap.id;
        const name = snap.data().name;
        const email = snap.data().email;
        
        let data = {
            from: 'DevFest India Team <no-reply@devfestindia.com>',
            to: email,
            subject: "[Confirmation] You're confirmed!  " + name,
            html: `
                <p>Hi ${name},</p>
                <p>Thanks for filling this form, we confirmed your registartion</p>
                <br>
                <p>Regards,</p>
                <p>Team DevFest India</p>
                `
        };
        let info = await transporter.sendMail(data);
        admin.firestore().collection('edata').doc(docId).update({
            status: 'Email Sent'
        });
    } catch (e) {
        console.log(e);
    }
}

exports.sendEmail = functions.firestore.document('edata/{id}').onCreate((snap, context) => {
    sendGmailConf(snap);
});