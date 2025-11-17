import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'saledeed2025@gmail.com',
        pass: 'qxel gmui xpvb xcxm', // App password
      },
    });

    // Email content
    const mailOptions = {
      from: 'saledeed2025@gmail.com',
      to: 'saledeed2025@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #d97706; border-bottom: 2px solid #d97706; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #333;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #333;">Email:</strong> <a href="mailto:${email}" style="color: #d97706;">${email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #333;">Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f9fafb; border-left: 4px solid #d97706; border-radius: 5px;">
            <p style="margin: 0 0 10px 0;"><strong style="color: #333;">Message:</strong></p>
            <p style="margin: 0; color: #555; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #888; font-size: 12px;">
            <p>This email was sent from the SaleDeed.com contact form</p>
            <p>© 2025 SaleDeed.com. All rights reserved.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

---
This email was sent from the SaleDeed.com contact form
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email', error: String(error) },
      { status: 500 }
    );
  }
}
