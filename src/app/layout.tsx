import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import clsx from "clsx";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={clsx(inter.className, "bg-white")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
