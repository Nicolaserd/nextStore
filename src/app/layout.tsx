// import type { Metadata } from "next";
import { Inter } from "next/font/google";

import   "./cssGlobal.css"
import { Header } from "app/components/shared/Header/Header";
import { Footer } from "app/components/shared/Footer";
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
      <body className={inter.className}>
      <Header/>
        
        {children}
      <Footer/>
      </body>
    </html>
  );
}
