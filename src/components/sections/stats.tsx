import React from 'react';
import { stats } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export default function Stats() {
  return (
    <section className="relative bg-transparent pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center shadow-lg transition-transform hover:-translate-y-1">
              <CardContent className="p-4 md:p-6">
                <div className="text-3xl lg:text-4xl font-extrabold text-primary">{stat.value}</div>
                <div className="text-sm text-foreground/70 mt-1">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
