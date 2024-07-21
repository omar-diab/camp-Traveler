import type { Metadata } from "next";
import "./globals.css";

import { Header, Footer } from '@/components';

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App For Camping",
  icons: {
    icon: '/camp.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
          <main className="relative overflow-hidden">
            {children}
          </main>
        <Footer/>
      </body>
    </html>
  );
}
