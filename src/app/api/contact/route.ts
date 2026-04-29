import { ContactEmailTemplate } from "@/templates/contactEmail";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body: ContactPayload = await req.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response("Dados inválidos", { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Zoom <onboarding@resend.dev>",
      to: process.env.EMAIL_TO!,
      subject: `Nova solicitação de contato - ${name}`,
      react: ContactEmailTemplate({
        name,
        email,
        message,
      }),
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("ERRO API:", error);
    return new Response("Erro interno", { status: 500 });
  }
}
