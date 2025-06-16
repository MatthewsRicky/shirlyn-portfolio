import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shirlyn Njeri Portfolio",
  description: "A Social Media and Brand Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 dark:bg-slate-950 text-slate-950 dark:text-gray-50 dark:text-opacity-90 relative pt-28 sm:pt-32`}
      >
        <div className="bg-[#fbe2e3] absolute -top-24 -z-10 right-44 h-125 w-[31.35rem] sm:w-263 rounded-full blur-[10rem] dark:bg-[#7e496c] antialiased"></div>
        <div className="bg-[#dbd7fb] absolute -top-4 -z-10 left-[-35rem] h-125 w-200 sm:w-263 rounded-full blur-[10rem] md:left[-33rem] lg:left-[-28rem] xl:-left-60 2xl:-left-20  antialiased"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
