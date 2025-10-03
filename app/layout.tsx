import "../styles/globals.css";

export const metadata = {
  title: "Landing Page Next.js",
  description: "Landing page siap deploy dengan Next.js 13 dan Vercel.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
