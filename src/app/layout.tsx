import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";

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
          <header className="header">
            <nav>
              <Link href="/signin">Log in</Link>
              <ThemeToggle />
            </nav>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
