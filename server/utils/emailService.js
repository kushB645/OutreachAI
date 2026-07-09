const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  try {
    console.log("Creating transporter...");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    console.log("Verifying transporter...");
    await transporter.verify();

    console.log("Sending email...");

    const info = await transporter.sendMail({
      from: `"OutreachAI" <${process.env.EMAIL_USER}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: `<p>${options.message}</p>`,
    });

    console.log("Email sent:", info.response);

    return info;
  } catch (err) {
    console.error("Email Error:", err);
    throw err;
  }
};

module.exports = sendEmail;