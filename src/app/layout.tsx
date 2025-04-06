import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ClientSessionProvider from "@/providers/ClientSessionProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "PhotoPickr App",
  description: "Get opinions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen antialiased bg-slate-50", inter.variable)}
      >
        <ClientSessionProvider>{children}</ClientSessionProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
