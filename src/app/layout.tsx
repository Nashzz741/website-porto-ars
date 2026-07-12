import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio.M | Creative Developer & Designer",
  description: "Portfolio of Studio.M",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{ margin: 0, padding: 0, width: "100%", maxWidth: "100%" }}
    >
      <body
        className="antialiased"
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          maxWidth: "100%",
          overflowX: "hidden",
          backgroundColor: "#0A0A0C",
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
