import { FooterTag, HeaderTag } from "@/components";
import type { Metadata } from "next";
import "../styles/global.scss";
import { WhatsappTag } from "@/components/whatsapp";

export const metadata: Metadata = {
  title: "Zoom",
  description: "Transformando Ideias, Acelerando Resultados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/zoom.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <WhatsappTag />
        <HeaderTag />

        {children}

        <FooterTag />
      </body>
    </html>
  );
}
