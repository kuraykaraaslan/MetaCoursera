import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Little Lemon Restaurant",
  description: "Your favorite restaurant in the world! 🍋",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body style={{ backgroundImage: "url('/wallpaper.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed" , backgroundPosition: "center", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
