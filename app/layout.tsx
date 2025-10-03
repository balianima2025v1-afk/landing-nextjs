import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page Next.js",
  description: "Landing page siap deploy dengan Next.js dan Vercel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
