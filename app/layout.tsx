'use client'

import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ['400', '500']
});

// export const metadata: Metadata = {
//   title: "Frontend Mentor | Bookmark landing page",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased`}
      >
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
