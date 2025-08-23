import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/app/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "tokki",
  description: "Webapp for learning Korean",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${nunito.className} h-full`}>{children}</body>
    </html>
  );
}
