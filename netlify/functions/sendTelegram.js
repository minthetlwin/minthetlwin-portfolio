export const handler = async (event) => {
  // Allow only POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        success: false,
        message: "Method Not Allowed",
      }),
    };
  }

  try {
    // Parse request body safely
    const body = JSON.parse(event.body || "{}");
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Name, email, and message are required",
        }),
      };
    }

    // Check environment variables
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Missing environment variables");

      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: "Server configuration error",
        }),
      };
    }

    // Format message
    const text = `
📩 New Portfolio Message

👤 Name: ${name}
📧 Email: ${email}

💬 Message:
${message}
`;

    // Telegram API call
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    });

    const data = await response.json();

    // Handle Telegram API failure
    if (!response.ok) {
      console.error("Telegram API Error:", data);

      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: "Failed to send message to Telegram",
          error: data,
        }),
      };
    }

    // Success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Message sent successfully",
      }),
    };
  } catch (error) {
    console.error("Function Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      }),
    };
  }
};