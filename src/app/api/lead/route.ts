import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const contactEmail = process.env.CONTACT_EMAIL || "sasha.vlad.mog@inbox.ru";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, telegram } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Укажите имя" },
        { status: 400 }
      );
    }
    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json(
        { error: "Укажите телефон" },
        { status: 400 }
      );
    }
    if (!telegram || typeof telegram !== "string" || !telegram.trim()) {
      return NextResponse.json(
        { error: "Укажите Telegram" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Сервис отправки недоступен. Обратитесь в Telegram." },
        { status: 503 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Заявки с сайта <onboarding@resend.dev>",
      to: [contactEmail],
      subject: `Заявка с сайта: ${name.trim()}`,
      text: [
        `Имя: ${name.trim()}`,
        `Телефон: ${phone.trim()}`,
        `Telegram: ${telegram.trim()}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Не удалось отправить заявку. Попробуйте позже или напишите в Telegram." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (e) {
    console.error("Lead API error:", e);
    return NextResponse.json(
      { error: "Произошла ошибка. Попробуйте позже или напишите в Telegram." },
      { status: 500 }
    );
  }
}
