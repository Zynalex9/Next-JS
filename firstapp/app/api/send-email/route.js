import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplete";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email } = await req.json();

    const response = await resend.emails.send({
      from: "alzn952@gmail.com",
      to: email,
      subject: "Welcome to Our Community!",
      html: <WelcomeTemplate name={name} />,
    });

    return new Response(JSON.stringify({ success: true, response }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
