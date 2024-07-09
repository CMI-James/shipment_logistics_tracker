// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;  // You can change this port if needed

app.use(bodyParser.json());

// Configure the email transporter using your email provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jamesakpamgbo@gmail.com',
    pass: 'griezzman'
  }
});

let serverOtp = '';  // Variable to store the OTP

// Route to send OTP
app.post('/send-otp', async (req, res) => {
  const { email } = req.body;

  // Generate a simple OTP
  serverOtp = uuidv4().split('-')[0]; 

  const mailOptions = {
    from: 'jamesakpamgbo@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${serverOtp}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'OTP has been sent to your email.' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending OTP: ' + error.message });
  }
});

// Route to verify OTP and handle user sign-up
app.post('/verify-otp', async (req, res) => {
  const { otp, email, password } = req.body;

  if (otp === serverOtp) {
    // You can handle user sign-up here
    // For example, save the user data to your database
    // Here, we're just sending a success response
    res.status(200).json({ message: 'OTP verified successfully. User signed up!' });
  } else {
    res.status(400).json({ error: 'Invalid OTP' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
