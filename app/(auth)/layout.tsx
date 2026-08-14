import type { Metadata } from "next";
import { Playfair_Display, Outfit, Syne, Raleway } from "next/font/google";
import "../globals.css";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-play-fair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sign in MoodLit",
  description: "Find your next read based on how you feel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playfair.variable} ${raleway.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
