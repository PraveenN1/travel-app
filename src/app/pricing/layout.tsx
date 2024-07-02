import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pricing | Hilink",
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
    </>
  );
}
