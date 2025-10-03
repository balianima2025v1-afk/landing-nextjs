import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50">
      <div className="w-full max-w-2xl px-4 py-12 text-center">
        <Image src="/logo.png" alt="Logo" width={80} height={80} className="mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">
          Selamat Datang di Landing Page Next.js!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Bangun website profesional dengan Next.js 13. Mudah, cepat, dan gratis untuk deploy di Vercel.
        </p>
        <a
          href="https://vercel.com/new"
          target="_blank"
          rel="noopener"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Deploy ke Vercel
        </a>
      </div>
      <footer className="w-full text-center py-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Landing Page Next.js. Dibuat dengan ❤️ oleh balianima2025v1-afk
      </footer>
    </main>
  );
}
