import type { Metadata } from "next";
import { Playfair_Display, Outfit, Syne, Raleway } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";


export const metadata: Metadata = {
  title: "MoodLit",
  description: "Find your next read based on how you feel.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
