import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import MouseFollower from "@/shared/components/animations/MouseFollower";
import Background from "@/shared/components/animations/Background";
import Header from "@/shared/components/layout/Header";
import Footer from "@/shared/components/layout/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hansolji - Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen overflow-hidden">
            <Background />
            <MouseFollower />
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
