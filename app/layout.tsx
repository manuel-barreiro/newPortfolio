import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  title: "Manuel Barreiro",
  description: "Engineer & Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="scrollbar-hide scroll-smooth"
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} ${unbounded.variable} scrollbar-hide`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
