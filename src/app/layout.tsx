import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobChaser",
  description: "Find your dream job easily!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <header className="flex items-center justify-between text-white p-4 shadow-md">
            {/* Sign In Link */}
            <Link
              href="/signin"
              className="px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Sign In
            </Link>

            {/* Logo */}
            <Image
              src="/logo.jpg"
              width={100}
              height={100}
              alt="Logo"
              className="rounded-full border-2 border-black"
            />

            {/* Theme Toggle (Assuming it's a button or switch) */}
            <ThemeToggle />
          </header>

          <main>{children}</main>
          {/* <footer className="footer">
            <p>© {new Date().getFullYear()} JobChaser. All rights reserved.</p>
          </footer> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
