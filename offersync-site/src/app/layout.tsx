import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OfferSync - As melhores promoções e cupons",
  description:
    "Reunimos ofertas, promoções e cupons de desconto dos maiores marketplaces. Cadastre-se e economize!",
  openGraph: {
    title: "OfferSync - As melhores promoções e cupons",
    description:
      "Reunimos ofertas, promoções e cupons de desconto dos maiores marketplaces. Cadastre-se e economize!",
    url: "https://seusite.com", // troque pelo seu domínio real
    siteName: "OfferSync",
    images: [
      {
        url: "https://seusite.com/og-image.jpg", // troque pela URL real da imagem
        width: 1200,
        height: 630,
        alt: "OfferSync - Promoções e cupons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OfferSync - As melhores promoções e cupons",
    description:
      "Reunimos ofertas, promoções e cupons de desconto dos maiores marketplaces. Cadastre-se e economize!",
    images: ["https://seusite.com/og-image.jpg"], // troque pela URL real da imagem
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MYSYC0QCVH"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MYSYC0QCVH');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
