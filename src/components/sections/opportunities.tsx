import React from 'react';
import Link from 'next/link';
import { opportunities } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Opportunities() {
  return (
    <section id="opportunities" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">Opportunities Hub — GOALS</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Gateway to Opportunities in Academia, Leadership & Sports</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {opportunities.map((opp) => (
            <Card key={opp.title} className="group flex flex-col shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{opp.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-foreground/70 flex-grow">{opp.description}</p>
                <Button asChild variant="ghost" className="self-start mt-4 p-0 h-auto text-accent hover:text-accent">
                    <Link href={opp.href} className='group/link'>
                        View Opportunities
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
