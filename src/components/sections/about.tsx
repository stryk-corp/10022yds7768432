import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { leadership, getImage } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users } from 'lucide-react';

const LeadershipCard = () => (
  <Card className="shadow-lg">
    <CardHeader>
      <CardTitle className="text-xl text-primary">Leadership</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      {leadership.map((person) => {
        const image = getImage(person.imageId);
        return (
          <div key={person.title} className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
              {image && <AvatarImage src={image.imageUrl} alt={person.name} data-ai-hint={image.imageHint} />}
              <AvatarFallback><Users className="h-6 w-6" /></AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-foreground">{person.name}</div>
              <div className="text-sm text-foreground/70">{person.title}</div>
            </div>
          </div>
        );
      })}
      <Link href="#leadership" className="mt-4 inline-block text-sm text-accent underline transition-colors hover:text-primary">
        Full Directory
      </Link>
    </CardContent>
  </Card>
);

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-primary mb-6">About the Secretariat</h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              The FCT Youth & Sports Development Secretariat (FCTASDS) coordinates youth and sports initiatives across the Federal Capital Territory. Established to deliver inclusive programs, the Secretariat focuses on youth entrepreneurship, skills development, sports excellence and civic engagement.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    To provide a supportive environment where FCT youth realise their potential.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    To inculcate knowledge, skills and positive attitudes in FCT youth for self-reliance and nation building.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <aside>
            <LeadershipCard />
          </aside>
        </div>
      </div>
    </section>
  );
}
