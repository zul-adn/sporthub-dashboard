import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nunito } from "next/font/google";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../styles/tailwind.css";
import ProviderComponent from "@/components/layouts/provider-component";


export const metadata: Metadata = {
  title: "Raih ASN",
  description: "Capai Mimpimu Menjadi ASN yang berprestasi",
};

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}> <ProviderComponent>{children}</ProviderComponent></body>
    </html>
  );
}
