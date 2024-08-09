"use client"

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./componets/Header";
// Agregar funetes

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Future store",
//   description: "Generated by Nicolas",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header/>
      <body className={inter.className}>
        
        {children}
      </body>
    </html>
  );
}
