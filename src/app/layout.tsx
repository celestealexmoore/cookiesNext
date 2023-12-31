import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Order Now!",
  description: "Order Online!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ height: "100vh", overflowY: "scroll" }}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
