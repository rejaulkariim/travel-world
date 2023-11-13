import Navbar from "@/components/Navbar";
import Notice from "@/components/Notice";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Travel the world | Home",
};

export default function RootLayout({
  children,
  contactModal,
}: {
  children: React.ReactNode;
  contactModal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollToTop />
          <Notice />
          <WhatsAppIcon />
          <Navbar />
          {contactModal}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
