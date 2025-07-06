const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-review", (req, res) => {
  const { name, contact, address, review } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "laxmidarsh786@gmail.com",         // ⚠️ your Gmail
      pass: "tlad xuei vfjk kbdd",            // ⚠️ Gmail app password
    },
  });

  const mailOptions = {
    from: "laxmidarsh786@gmail.com",
    to: "laxmidarsh786@gmail.com",
    subject: "New Review Submitted",
    html: `
      <h2>New Review</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Review:</strong><br>${review}</p>
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Email send error:", err);
      return res.status(500).send("Failed to send email");
    }
    res.send("Review sent successfully!");
  });
});

app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on all interfaces: http://localhost:3000");
});

