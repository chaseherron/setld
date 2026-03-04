import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Setld — Get Your Security Deposit Back | NYC Renters",
  description:
    "NYC tenants recover their security deposits in minutes. Free demand letter backed by NY law. You only pay $249 when your landlord pays.",
  openGraph: {
    title: "Setld — Get Your Security Deposit Back",
    description:
      "NYC tenants recover their security deposits in minutes. Free demand letter backed by NY law.",
    url: "https://getsetld.io",
    siteName: "Setld",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${syne.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
