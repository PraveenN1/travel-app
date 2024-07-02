import type { Metadata } from "next";
import AuthProvider from './context/AuthProvider';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
export const metadata: Metadata = {
  title: "Hilink",
  description: "Camping and Travel website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <AuthProvider>
          <Navbar />
          <main >
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
