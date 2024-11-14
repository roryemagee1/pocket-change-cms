
'use client';

import { museoModerno, roboto } from '@/app/fonts/fonts';
// import { usePathname } from 'next/navigation';

import Link from 'next/link';
export default function Header() {
  return (
    <header className="z-10 px-7 h-[100px] flex items-center justify-between w-full bg-white fixed top-0">
      <h1 className={`${roboto.className} text-[#D52267] text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8`}>
        trybotta
      </h1>
      <nav className="flex items-center justify-between w-[440px]">
        <Link
          href="/impact"
        >
          <span className={`${roboto.className} text-center text-xl font-bold text-[#292f36] md:text-left mt-5 md:pl-8`}>Impact</span>
        </Link>
        <Link
          href="/blog"
        >
          <span className={`${roboto.className} text-center text-xl font-bold text-[#292f36] md:text-left mt-5 md:pl-8`}>Blog</span>
        </Link>
        <Link
          href="/newsletter"
        >
          <span className={`${roboto.className} text-center text-xl font-bold text-[#292f36] md:text-left mt-5 md:pl-8`}>Newsletter</span>
        </Link>
        <button className="h-10 px-4 font-semibold rounded-full bg-[#0A7986] text-white" type="submit">
          Sign-up!
        </button>
      </nav>
    </header>
  )
}