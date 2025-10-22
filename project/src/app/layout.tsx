import type { Metadata } from "next";
import Script from "next/script";
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
  "промптинг"]

};

export default function RootLayout({
  children
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ru" data-oid="b1jifow">
      <body className="antialiased" data-oid="hqec2:a">
        {children}

        <Script
          src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@d3887f2/apps/web/client/public/onlook-preload-script.js"
          strategy="afterInteractive"
          type="module"
          id="onlook-preload-script"
          data-oid="6mzg43e">
        </Script>
      </body>
    </html>);

}