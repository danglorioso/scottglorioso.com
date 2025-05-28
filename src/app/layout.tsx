import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Scott Glorioso - Singer, Songwriter, Sound Engineer, Producer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className={`${rubik.variable} bg-black antialiased flex flex-col min-h-screen`}
      >
        {/* Header */}
        <div className="flex-shrink-0">
          <Header />
        </div>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <div className="flex-shrink-0">
          <Footer />
        </div>
      
        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
