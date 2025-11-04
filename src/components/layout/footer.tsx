'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { footerLinks } from '@/lib/data';

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Subscription logic here
  };

  return (
    <footer id="contact" className="bg-brand-dark-green text-white/90">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 md:grid-cols-3">
        <div>
          <h4 className="font-headline text-lg font-bold text-white">Contact</h4>
          <div className="mt-4 space-y-2 text-sm">
            <p>Cyprian Ekwensi Center For Arts & Culture, Area 10, Garki-Abuja.</p>
            <p>Email: info@fctasds.gov.ng</p>
            <p>Phone: +234 800 123 4567</p>
          </div>
        </div>
        <div>
          <h4 className="font-headline text-lg font-bold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-brand-yellow">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-headline text-lg font-bold text-white">Stay Updated</h4>
          <p className="mt-4 text-sm">Subscribe for newsletters and opportunity alerts.</p>
          <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              aria-label="email"
              placeholder="Enter email"
              className="flex-1 bg-white/90 text-black placeholder:text-gray-500"
              required
            />
            <Button
              type="submit"
              className="bg-brand-yellow text-brand-yellow-dark font-semibold hover:bg-yellow-300"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} FCT-Abuja Youth & Sports Development Secretariat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
