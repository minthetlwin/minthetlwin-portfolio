import axios from "axios";

export const handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    const text = `
📩 New Portfolio Message

👤 Name: ${name}
📧 Email: ${email}

💬 Message:
${message}
`;

    await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Message sent successfully",
      }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Failed to send message",
      }),
    };
  }
};