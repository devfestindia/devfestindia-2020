const functions = require('firebase-functions');
const admin = require('firebase-admin');
// SandGrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");

admin.initializeApp();

const sendSendGridMail = async (snap) => {
    try {
        const docId = snap.id;
        const name = snap.data().name;
        const email = snap.data().email;
        const fname = name.split(' ')[0]
        let info = await sgMail.send({
            from:"DevFest India Team <no-reply@devfestindia.com>",
            dynamicTemplateData:{name:fname},
            to: email,
            templateId:"d-925790fb2b49471f9cb6a54a067fd3c9",
        }).then(res=>{
            console.log('Called')
            console.log(res)
        }).catch(e=>{
            console.log(e)
        })
        admin.firestore().collection('edata').doc(docId).update({
            status: 'Email Sent'
        });
    } catch (e) {
        console.log(e);
    }
}

exports.sendConfirmationEmail = functions.firestore.document('edata/{id}').onCreate((snap, context) => {
    sendSendGridMail(snap);
});

