import ThemeProviderWrapper from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Geist_Mono, Inter, Manrope } from "next/font/google";
import Navbar from "../components/navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geist_mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Agenforce Template",
  description:
    "Practicing Agenforce Template with Next.js, TypeScript, Tailwind CSS and Motion for React.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} ${geist_mono.variable} antialiased`}
      >
        <ThemeProviderWrapper
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="bg-background text-foreground">{children}</main>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
