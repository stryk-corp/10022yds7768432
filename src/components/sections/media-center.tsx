'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { mediaItems } from '@/lib/data';
import Autoplay from 'embla-carousel-autoplay';

export default function MediaCenter() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section id="media" className="bg-muted/50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Media Center</h2>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {mediaItems.map((item, index) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group">
                    <div className="relative h-56 w-full">
                       <Image
                        src={item.imageUrl}
                        alt={item.description}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        data-ai-hint={item.imageHint}
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground">Event / Album {index + 1}</h3>
                      <p className="text-sm text-foreground/70 mt-1">
                        Photos and videos from recent outreach programs.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
