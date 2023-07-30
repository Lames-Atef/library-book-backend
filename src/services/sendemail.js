import nodemailer from "nodemailer"

 export async function sendEmail(to,subject,html){
    let transporter = nodemailer.createTransport({
service:"email",
        auth: {
          user:process.env.EMAIL, // generated ethereal user
          pass: process.env.PASSWORD, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `"lames" <${process.env.EMAIL}>`, // sender address
        to, // list of receivers
        subject, // Subject line
        html
      });
      console.log(info);
    
}
export default sendEmail