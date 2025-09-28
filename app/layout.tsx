import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Y",
  description: "Test Project ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <p className="text-white">Test</p>
      </body>
    </html>
  );
}
