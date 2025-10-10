'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/jobs', label: 'Jobs' },
    { href: '/history', label: 'History' },
  ];

  return (
    <header className="bg-white border-b border-slate-200 px-8 py-2 flex justify-between items-center shadow-sm sticky top-0 z-50">
      {/* Bagian Kiri: Logo dan Nama */}
      <div className="flex items-center gap-3 shrink-0">
        <img src="/Logo.png" alt="Solomon Indo Global" className="h-9 w-auto" />
        <span className="font-bold text-xl text-gray-800">Solomon Indo Global</span>
      </div>

      {/* Bagian Tengah: Menu Navigasi */}
      <nav className="flex-grow flex justify-center">
        <div className="flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-slate-600 font-medium py-2 transition-colors ease-in-out',
                  {
                    'text-primaryBlue font-semibold border-b-2 border-primaryBlue': isActive,
                    'hover:text-primaryBlue': !isActive,
                  }
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bagian Kanan: User Icon (Placeholder) */}
      <div className="flex items-center shrink-0">
        <div className="bg-primaryBlue text-white w-10 h-10 rounded-full grid place-items-center font-bold text-lg cursor-pointer shadow-md">
          D
        </div>
      </div>
    </header>
  );
}
