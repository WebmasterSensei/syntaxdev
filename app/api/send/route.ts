import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message }: ContactFormData = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email
    await resend.emails.send({
      from: "syntaxlabdev@resend.dev",
      to: "webmasteraturservice@gmail.com",
      subject: "📧 New Contact Form Submission",
      html: generateEmailTemplate(name, email, message),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}

function generateEmailTemplate(
  name: string,
  email: string,
  message: string
): string {
  return `
    <div style="
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 2px;
      border-radius: 12px;
    ">
      <div style="
        background: white;
        padding: 32px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      ">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 24px;">
          <h1 style="
            color: #1a202c;
            font-size: 24px;
            font-weight: 700;
            margin: 0 0 8px 0;
          ">
            New Message Received
          </h1>
          <p style="color: #718096; margin: 0;">
            Contact Form Submission
          </p>
        </div>
       
        <!-- Content -->
        <div style="
          background: #f7fafc;
          border-radius: 8px;
          padding: 24px;
          margin-bottom: 24px;
        ">
          <!-- Sender Info -->
          <div style="margin-bottom: 16px;">
            <h3 style="
              color: #2d3748;
              font-size: 14px;
              font-weight: 600;
              margin: 0 0 4px 0;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            ">
              From
            </h3>
            <p style="color: #1a202c; margin: 0; font-size: 16px;">
              <strong>${name}</strong>
            </p>
            <p style="color: #4299e1; margin: 4px 0 0 0; font-size: 14px;">
              ${email}
            </p>
          </div>
         
          <!-- Message -->
          <div>
            <h3 style="
              color: #2d3748;
              font-size: 14px;
              font-weight: 600;
              margin: 0 0 8px 0;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            ">
              Message
            </h3>
            <div style="
              background: white;
              border-left: 4px solid #4299e1;
              padding: 16px;
              border-radius: 4px;
              color: #4a5568;
              line-height: 1.6;
            ">
              ${message}
            </div>
          </div>
        </div>
       
        <!-- Footer -->
        <div style="
          text-align: center;
          padding-top: 16px;
          border-top: 1px solid #e2e8f0;
        ">
          <p style="color: #718096; font-size: 12px; margin: 0;">
            This email was sent from your website contact form
          </p>
        </div>
      </div>
    </div>
  `;
}
