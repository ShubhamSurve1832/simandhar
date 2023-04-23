
require ('dotenv').config()

const sgMail = require('@sendgrid/mail');

const { SENDGRID_APY_KEY } = process.env;

sgMail.setApiKey(SENDGRID_APY_KEY )

export default async function handler(req, res) {
  const { name, email, number, course } = req.body;

  const msg = {
    to: "nitin@theadroit.in",
    from: "nitin@theadroit.in",
    subject: "home page contact form",
    html: `
      <p><strong>Name: </strong>${name}</p>
      <p><strong>Email ID: </strong>${email}</p>
      <p><strong>Phone Number: </strong>${number}</p>
      <p><strong>Course: </strong>${course}</p>
    `
  };
  await sgMail.send(msg)
  res.status(200).json({ success: true })
}