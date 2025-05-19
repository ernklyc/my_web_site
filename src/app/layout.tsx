import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Eren Kalaycı | Computer Engineering Student & Web Developer",
  description: "Personal website and portfolio of Eren Kalaycı, Computer Engineering Student and Web Developer based in Istanbul, Turkey.",
  keywords: "Eren Kalaycı, Web Developer, Computer Engineering, Portfolio, Istanbul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        <Header />
        <main className="pt-16"> {/* Padding for fixed header */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
