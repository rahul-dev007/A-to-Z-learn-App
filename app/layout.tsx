import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>

        {/* Topbar */}
        <nav className="flex gap-6 p-4 bg-black text-white">
          <Link href="/html">HTML</Link>
          <Link href="/css">CSS</Link>
          <Link href="/js">JavaScript</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}