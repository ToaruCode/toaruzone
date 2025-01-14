import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ToaruZone",
  description: "A platform to find jobs and manage schedules.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="p-4 bg-blue-600 text-white">
          <h1 className="text-2xl font-bold">ToaruZone</h1>
        </header>
        <main className="p-6">{children}</main>
        <footer className="p-4 text-center text-gray-600">
          © {new Date().getFullYear()} ToaruZone. All rights reserved.
        </footer>
      </body>
    </html>
  );
}