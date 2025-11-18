import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/data';

const heroBg = getImage('hero_bg');

const QuickActions = () => (
  <div className="mt-8 w-full md:mt-0 md:w-[420px] bg-black/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg">
    <h3 className="text-white font-semibold mb-3">Quick Actions</h3>
    <div className="grid grid-cols-1 gap-3">
      <Button asChild variant="secondary" className="justify-start bg-white/95 text-primary hover:bg-white h-auto whitespace-normal text-left">
        <Link href="#register">Register Your Youth Organisation</Link>
      </Button>
      <Button asChild variant="secondary" className="justify-start bg-white/20 text-white hover:bg-white/30 h-auto whitespace-normal text-left">
        <Link href="#join">Join the Youth Parliament</Link>
      </Button>
      <Button asChild variant="secondary" className="justify-start bg-white/20 text-white hover:bg-white/30">
        <Link href="#opportunities">Explore Opportunities</Link>
      </Button>
    </div>
  </div>
);

export default function Hero() {
  return (
    <section id="home" className="relative text-white">
      <div className="h-[80vh] w-full min-h-[600px] md:h-[calc(100vh-120px)]">
        {heroBg && (
          <Image
            src={heroBg.imageUrl}
            alt={heroBg.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroBg.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-green/90 via-primary/50 to-transparent" />
        <div className="relative z-10 container mx-auto flex h-full items-end justify-between px-4 pb-8 md:items-center md:pb-12 md:pt-16">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                Empowering Tomorrow's Leaders Today
              </h1>
              <p className="mt-4 text-base md:text-lg opacity-90 max-w-prose">
                Building resilient, skilled and engaged youth across the Federal Capital Territory through inclusive programs, sports and leadership.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-brand-yellow text-brand-yellow-dark font-semibold shadow-lg transition-transform hover:scale-105 hover:bg-yellow-300">
                  <Link href="#opportunities">Explore Opportunities</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 font-semibold shadow-lg backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white">
                  <Link href="#programs">Our Programs</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <QuickActions />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 container mx-auto px-4 -mt-16 mb-16 md:hidden">
        <QuickActions />
      </div>
    </section>
  );
}
