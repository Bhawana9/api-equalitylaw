const sgMail=require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail=(email,name)=>{

//Send welcome email
    sgMail.send({
        to:email,
        from:'bh2990@gmail.com',
        subject:'Thanks for joining us.Please feel free to discuss about your complaints',
        text:`Welcome to the app ${name}. `
    })
}

//Cancelation  email
const cancelEmail=(email, name)=>{
    sgMail.send({
        to:email,
        from:'bh2990@gmail.com',
        subject:'We are sorry to say GOODBYE!!.Hope you re-connect',
        text:`Hi ${name}. What went wrong!! Please share your feedback. `
    })
}




module.exports={
    sendWelcomeMail,
    cancelEmail
}