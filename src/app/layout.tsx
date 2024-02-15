import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Webassembly solutions - Advent of Code`,
  description: "Webassembly solutions - Advent of Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-100`}>
        <div className="flex gap-3 p-2 bg-white mb-4">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/2023">
            2023
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
