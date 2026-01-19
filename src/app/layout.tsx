import type { Metadata } from "next";
import "./globals.css";
import { COURSE_START_DATE, PRICE_REGULAR } from "@/config/constants";
import ErrorBoundaryWrapper from "./components/ErrorBoundaryWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://timetoitai.ru"),
  title: `Курс по промптингу для менеджеров — старт ${COURSE_START_DATE} — ${PRICE_REGULAR.toLocaleString("ru-RU")} ₽`,
  description:
    "4 практических занятия: Onlook, Cursor, GitLab. Соберите свой AI-MVP и опубликуйте его. В цену включены подписки на Cursor и Onlook",
  keywords: [
    "курс по промптингу",
    "Cursor",
    "Onlook",
    "GitLab",
    "AI для менеджеров",
    "промптинг",
    "обучение промптингу",
    "AI инструменты",
  ],
  authors: [{ name: "Time to IT" }],
  creator: "Time to IT",
  publisher: "Time to IT",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://timetoitai.ru",
    title: `Курс по промптингу для менеджеров — старт ${COURSE_START_DATE}`,
    description:
      "4 практических занятия: Onlook, Cursor, GitLab. Соберите свой AI-MVP и опубликуйте его.",
    siteName: "Time to IT",
  },
  twitter: {
    card: "summary_large_image",
    title: `Курс по промптингу для менеджеров — старт ${COURSE_START_DATE}`,
    description:
      "4 практических занятия: Onlook, Cursor, GitLab. Соберите свой AI-MVP и опубликуйте его.",
  },
  alternates: {
    canonical: "https://timetoitai.ru",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <ErrorBoundaryWrapper>{children}</ErrorBoundaryWrapper>
      </body>
    </html>
  );
}
