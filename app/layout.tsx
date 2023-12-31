import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Docs' },
    { href: '/todos', label: 'Todo' },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <header>
          <nav className="felx items-center">
            {links.map((link) => (
              <ul>
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              </ul>
            ))}
          </nav>
        </header> */}

        <div>{children}</div>
      </body>
    </html>
  );
}
