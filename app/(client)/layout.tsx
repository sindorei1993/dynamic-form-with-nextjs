import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";

const dana = localFont({
  src: [
    {
      path: "../../public/fonts/dana-vf/DanaVF.woff",
      weight: "400",
    },
    {
      path: "../../public/fonts/dana-vf/staticfonts/Dana-Bold.woff",
      weight: "700",
    },
  ],
  variable: "--font-dana",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dynamic form with Nextjs",
  description: "A dynamic form built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dana.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
