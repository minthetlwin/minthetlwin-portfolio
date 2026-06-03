import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "All fields are required",
        }),
      };
    }

    // Email content
    const htmlContent = `
      <div style="font-family: Arial; line-height: 1.6;">
        <h2>📩 New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr />

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `;

    // Send email
    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Message",
      html: htmlContent,
      reply_to: email,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully",
        id: response.id,
      }),
    };
  } catch (error) {
    console.error("Email function error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Failed to send email",
        error: error.message,
      }),
    };
  }
};