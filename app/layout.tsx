import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rent Art, Love It, Buy It | Premium Art Rental India | Ashish Patel",
  description: "Transform your space with premium art rentals. Flexible plans for homes, offices, hotels & events. Rent-to-own option available. 500+ artworks, 200+ happy clients. Try before you buy!",
  keywords: ["art rental India", "rent artwork", "office art rental", "home art rental", "art subscription", "rent to own art"],
  openGraph: {
    title: "Rent Art, Love It, Buy It | Premium Art Rental India",
    description: "India's premier art rental service. Flexible monthly plans starting ₹700. Love it? Buy it anytime.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
