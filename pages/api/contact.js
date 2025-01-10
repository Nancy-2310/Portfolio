
// pages/api/contact.js

import React from 'react';
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, subject, message } = req.body;
  
      // Send email logic here
      // Example: using Nodemailer
      const nodemailer = require('nodemailer');
  
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // e.g., 'Gmail'
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission: ${subject}`,
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      };
  
      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending message' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} not allowed`);
    }
  }
  