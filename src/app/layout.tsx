import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./components/navigation";
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UCSC Treenets",
  description: "Weaving at Universit of California, Santa Cruz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Navigation />
        <main className="min-h-full flex flex-col">
        {children}
        <footer className="text-xs fixed bottom-0 w-full justify-between py-2 pt-4 px-16 bg-black/50 backdrop-blur-md items-start z-30">
            <p>&copy; 2026 Weavers in Santa Cruz. All Rights Reserved</p>
            <p className="mt-2">NOT AFFILIATED WITH THE UNIVERSITY OF CALIFORNIA, SANTA CRUZ</p>
        </footer>
        </main>
      </body>
    </html>
  );
}
