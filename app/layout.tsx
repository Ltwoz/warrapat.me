import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { Separator } from "@/components/ui/separator";

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
        <div className="container flex flex-col py-4 px-4 md:px-6 md:py-6 space-y-6 min-h-screen">
          <Navbar />
          <div className="flex-grow pt-10">{children}</div>
          <Separator />
          <Footer />
        </div>
      </body>
    </html>
  );
}
