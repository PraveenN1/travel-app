import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "TravelApp | Pricing",
  description: "pricing plans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        {children}
        <Footer/>
    </>
  );
}
