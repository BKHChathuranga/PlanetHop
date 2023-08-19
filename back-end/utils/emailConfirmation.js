const nodemailer = require("nodemailer");
require("dotenv").config();

exports.sendConfirmationEmail = async () => {
  try {
    let transport = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });
    message = {
      from: process.env.USER_EMAIL,
      to: "wildwolf1999warzone@gmail.com",
      subject: "Subject",
      text: "Hello SMTP Email",
    };
    return Promise.resolve(await transport.sendMail(message));
  } catch (error) {
    return Promise.reject({ error: true, message: error.message});
  }
};
