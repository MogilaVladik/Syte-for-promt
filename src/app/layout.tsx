import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Курс по промптингу для менеджеров — старт 15 декабря — 35 000 ₽",
  description:
    "4 практических занятия: Onlook, Cursor, GitLab. Соберите свой AI-MVP и опубликуйте его. В цену включены подписки на Cursor и Onlook",
  keywords: [
    "курс по промптингу",
    "Cursor",
    "Onlook",
    "GitLab",
    "AI для менеджеров",
    "промптинг",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
