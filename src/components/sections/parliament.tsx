import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { parliamentSpeakers } from '@/lib/data';
import { Button } from '../ui/button';

const ParliamentSpeakersCard = () => (
    <Card className="shadow-lg">
        <CardHeader>
            <CardTitle className="text-lg text-primary">Parliament Leadership</CardTitle>
        </CardHeader>
        <CardContent>
            {parliamentSpeakers.map((speaker, index) => (
                <React.Fragment key={speaker.title}>
                    <div>
                        <h4 className="font-semibold text-foreground">{speaker.title}</h4>
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
              <div className="space-y-4 text-lg leading-relaxed text-foreground/80 mb-8">
                <p>
                  The FCT Youth Parliament is a parliamentary body established to mentor and empower the youth of the Federal Capital Territory. It serves as a Federal Capital Administration platform for young people to advocate for their interests, debate important issues, and develop their leadership skills. This is backed by the FCTA Youth & Sports Development Secretariat.
                </p>
                <p>
                  Through the parliament, youth can actively and respectfully participate in governance through peaceful political or diplomatic means. The Parliament consists of the two Federal Constituencies in FCT. Which includes: Abuja South (Abaji, Gwagwalada, Kuje, and Kwali) and the Abuja North (AMAC and Bwari).
                </p>
                <p>
                  Nominees are selected from the Six Area Councils in FCT and duly screened to represent their respective constituencies. Members of the youth parliament were inaugurated by the mandate secretary. The Youth Parliament raise motions, debate issues, draft resolutions, draft policies, and submit it to the secretariat for further review and implementations.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild><Link href="#">Download FCTAYP Standing Order</Link></Button>
                  <Button asChild variant="outline"><Link href="#">Download FCTAYP Framework</Link></Button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Card>
                      <CardHeader>
                          <CardTitle className="text-lg text-primary">House Committees</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <ul className="space-y-2 text-foreground/70">
                              <li>Entrepreneurship & Job Creation</li>
                              <li>Housing, Land & Infrastructure Development</li>
                              <li>Diplomacy, Migration & Int'l Cooperation</li>
                              <li>Communication & Social Media</li>
                              <li>Healthcare, Medical, Pharmacy & Biotechnology</li>
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
            <aside className='space-y-8'>
                <ParliamentSpeakersCard />
            </aside>
        </div>
      </div>
    </section>
  );
}
