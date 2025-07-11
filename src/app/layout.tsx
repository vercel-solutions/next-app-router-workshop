import Link from "next/link";
import Image from "next/image";

import Card from "@/components/Card";

import "@/globals.css";

function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="mx-auto flex min-h-screen max-w-4xl flex-col items-stretch gap-6 p-6 font-sans">
        <header>
          <Card>
            <Link href="/">
              <div className="flex flex-row items-center gap-[6px] p-3">
                <Image alt="ACME stores" height={32} src="/acme.svg" width={32} />
                <h1 className="text-base font-bold text-white">ACME Stores</h1>
              </div>
            </Link>
          </Card>
        </header>

        <main className="flex-1">
          <Card>
            <section className="p-4">{children}</section>
          </Card>
        </main>

        <footer>
          <Card>
            <div className="flex flex-row items-center justify-between p-3 text-white/70">
              <div className="flex flex-row items-center gap-1">
                <span>By</span> <Image alt="Vercel Logo" height={16} src="/vercel.svg" width={16} />
              </div>
              <div className="flex flex-row items-center gap-1">
                <Image alt="Next.js logo" height={32} src="/nextjs.svg" width={32} />
                <p>App Router workshop</p>
              </div>
            </div>
          </Card>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
