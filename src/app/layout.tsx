import ThemeProviderWrapper from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
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
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <ThemeProviderWrapper
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="bg-background text-foreground">{children}</main>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
