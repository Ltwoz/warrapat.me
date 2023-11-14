import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "warrapat.me",
  description: "I'm Warrapat, a software developer from Thailand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="container py-4 px-4 md:px-6 md:py-6 space-y-6">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
