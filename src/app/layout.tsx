import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FullCalendar React Example",
  description: "A simple demo of how to use FullCalendar on the React.js framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full flex h-svh overflow-hidden flex-col">
          <div className="bg-gray-800 mb-4">
            <nav className="flex items-center justify-evenly flex-wrap p-6">
              <Link className="text-gray-50 hover:text-blue-100" href="/">Home (Full Example)</Link>
              <Link className="text-gray-50 hover:text-blue-100" href="/daygrid">Day Grid</Link>
              <Link className="text-gray-50 hover:text-blue-100" href="/timegrid">Time Grid</Link>
              <Link className="text-gray-50 hover:text-blue-100" href="/multimonth">Multi Month</Link>
              <Link className="text-gray-50 hover:text-blue-100" href="/list">List</Link>
            </nav>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
