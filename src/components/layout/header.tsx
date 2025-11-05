'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { navLinks, topNavLinks, getImage } from '@/lib/data';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const fctaLogo = getImage('fcta_logo');

const TopBar = () => (
  <div className="bg-brand-dark-green text-white/80">
    <div className="container mx-auto flex h-auto min-h-14 items-center justify-between px-4 py-2 text-sm md:h-14 md:py-0">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        {fctaLogo && (
          <Image
            src={fctaLogo.imageUrl}
            alt={fctaLogo.description}
            width={40}
            height={40}
            className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
            data-ai-hint={fctaLogo.imageHint}
          />
        )}
        <div className="min-w-0 flex-1">
          <div className="truncate font-semibold text-white text-xs sm:text-sm">FEDERAL CAPITAL TERRITORY ADMINISTRATION</div>
          <div className="truncate text-xs opacity-80">Youth & Sports Development Secretariat</div>
        </div>
      </div>
      <div className="hidden items-center gap-6 md:flex">
        {topNavLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
            {link.label}
          </Link>
        ))}
        <Button variant="destructive" size="sm">Report Issues</Button>
      </div>
    </div>
  </div>
);

const MainNav = () => (
  <nav className="bg-card/80 sticky top-0 z-40 backdrop-blur-lg shadow-sm">
    <div className="container mx-auto px-4">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {fctaLogo && (
            <Image
              src={fctaLogo.imageUrl}
              alt={fctaLogo.description}
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
              data-ai-hint={fctaLogo.imageHint}
            />
          )}
          <span className="font-bold text-primary text-lg">FCTAYDS</span>
        </Link>
        <div className="hidden items-center gap-2 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  </nav>
);

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon">
        <Menu className="h-6 w-6 text-primary" />
        <span className="sr-only">Open menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col gap-4 p-4">
        <Link href="/" className="mb-4 flex items-center gap-2">
           {fctaLogo && (
            <Image
              src={fctaLogo.imageUrl}
              alt={fctaLogo.description}
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
              data-ai-hint={fctaLogo.imageHint}
            />
          )}
          <span className="font-bold text-primary text-lg">FCTAYDS</span>
        </Link>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-md px-3 py-2 text-base font-medium text-foreground/70 hover:bg-muted hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
        <div className='pt-4 border-t'>
            {topNavLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block rounded-md px-3 py-2 text-base font-medium text-foreground/70 hover:bg-muted hover:text-foreground">
                    {link.label}
                </Link>
            ))}
            <Button variant="destructive" className='w-full mt-4'>Report Issues</Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

export default function Header() {
  return (
    <header className="relative z-50">
      <TopBar />
      <MainNav />
    </header>
  );
}
