import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components";
import { IconSprite } from "@/icons/IconSprite";

export const metadata: Metadata = {
  title: "Phone Store - Zara Challenge",
  description: "Phone Store - Zara Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <IconSprite />
      <html lang="en">
        <body cz-shortcut-listen="true">
          <Header />
          {children}
        </body>
      </html>
    </CartProvider>
  );
}
