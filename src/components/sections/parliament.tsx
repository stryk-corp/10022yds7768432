import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { parliamentSpeakers } from '@/lib/data';

const ParliamentSpeakersCard = () => (
    <Card className="shadow-lg">
        <CardContent className="p-6">
            {parliamentSpeakers.map((speaker, index) => (
                <React.Fragment key={speaker.title}>
                    <div>
                        <h4 className="font-semibold text-primary">{speaker.title}</h4>
                        <p className="text-foreground/70">{speaker.name}</p>
                    </div>
                    {index < parliamentSpeakers.length - 1 && <Separator className="my-4" />}
                </React.Fragment>
            ))}
        </CardContent>
    </Card>
);

export default function Parliament() {
  return (
    <section id="parliament" className="bg-muted/50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-6">FCT-Abuja Youth Parliament</h2>
              <p className="text-lg leading-relaxed text-foreground/80 mb-8">
                A platform to mentor, train and empower youth leaders; the Parliament debates issues, raises motions and makes recommendations for youth-focused policies in the FCT.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Card>
                      <CardHeader>
                          <CardTitle className="text-lg text-primary">Committees</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <ul className="space-y-2 text-foreground/70">
                              <li>Entrepreneurship & Job Creation</li>
                              <li>Housing, Land & Infra</li>
                              <li>Diplomacy & Int'l Coop</li>
                              <li>Communication & Media</li>
                          </ul>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle className="text-lg text-primary">Become a Member</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-foreground/70">
                              Nomination → Screening → Shortlist → Workshop → Inauguration. Representatives come from the six Area Councils in FCT.
                          </p>
                      </CardContent>
                  </Card>
              </div>
            </div>
            <aside>
                <ParliamentSpeakersCard />
            </aside>
        </div>
      </div>
    </section>
  );
}
