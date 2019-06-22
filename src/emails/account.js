const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail =(email,name)=>{
    sgMail.send({
        to:email,
        from:'asadaazamcse16@gmail.com',
        subject:'Welcome to the task App',
        text:`Welcome to the aap, ${name}. Let me know how you get along with the app.`
    })

}

const sendCancelEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'asadaazamcse16@gmail.com',
        subject:'Accounted deleted from task App',
        text:`Your account has been succesfully deleted ,${name}.We wish we could have done something to keep u with us.`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}