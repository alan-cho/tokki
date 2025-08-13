import type { Metadata } from "next";
import "@/app/globals.css";
import { Nunito } from "next/font/google";

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
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
