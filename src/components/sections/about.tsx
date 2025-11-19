
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { leadership, getImage } from '@/lib/data';
import type { LeadershipMember } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, X, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LeadershipList = ({ onSelectLeader }: { onSelectLeader: (leader: LeadershipMember) => void }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLeadership = leadership.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Card className="shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary mb-4">Leadership</CardTitle>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search leaders..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-2">
                {filteredLeadership.length > 0 ? (
                    filteredLeadership.map((person) => {
                        const image = getImage(person.imageId);
                        return (
                            <button
                                key={person.name}
                                className="flex w-full items-center gap-4 text-left transition-colors hover:bg-muted/50 p-2 rounded-md"
                                onClick={() => onSelectLeader(person)}
                            >
                                <Avatar className="h-14 w-14">
                                    {image && <AvatarImage src={image.imageUrl} alt={person.name} data-ai-hint={image.imageHint} />}
                                    <AvatarFallback><Users className="h-6 w-6" /></AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-semibold text-foreground">{person.name}</div>
                                    <div className="text-sm text-foreground/70">{person.title}</div>
                                </div>
                            </button>
                        );
                    })
                ) : (
                    <p className="text-center text-muted-foreground py-4">No leaders found.</p>
                )}
            </CardContent>
        </Card>
    );
};

const LeadershipProfile = ({ leader, onBack }: { leader: LeadershipMember; onBack: () => void }) => {
  const image = getImage(leader.imageId);
  return (
    <Card className="shadow-lg bg-card/80 backdrop-blur-sm">
      <CardHeader className="relative">
        <Button onClick={onBack} variant="ghost" size="icon" className="absolute top-4 left-4">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex flex-col items-center pt-8">
          <Avatar className="h-24 w-24 border-4 border-primary">
            {image && <AvatarImage src={image.imageUrl} alt={leader.name} data-ai-hint={image.imageHint} />}
            <AvatarFallback><Users className="h-10 w-10" /></AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4 text-center text-xl text-primary">{leader.name}</CardTitle>
          <p className="text-center text-sm text-foreground/70">{leader.title}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 px-6 pb-6">
        <p className="text-base text-foreground/80 leading-relaxed text-justify">{leader.bio}</p>
        {leader.socials && (
            <div className='flex items-center justify-center gap-4 pt-4'>
                {leader.socials.twitter && <Link href={leader.socials.twitter} target='_blank' className='text-foreground/70 hover:text-primary'>Twitter</Link>}
                {leader.socials.linkedin && <Link href={leader.socials.linkedin} target='_blank' className='text-foreground/70 hover:text-primary'>LinkedIn</Link>}
            </div>
        )}
      </CardContent>
    </Card>
  );
}

const aboutHeroBg = getImage('about_hero_bg');
const aboutContentBg = getImage('about_content_bg');

export default function About() {
  const [selectedLeader, setSelectedLeader] = useState<LeadershipMember | null>(null);

  return (
    <section id="about" className="bg-muted/30">
        {aboutHeroBg && (
          <div className="relative h-64 w-full">
            <Image
              src={aboutHeroBg.imageUrl}
              alt={aboutHeroBg.description}
              fill
              className="object-cover"
              data-ai-hint={aboutHeroBg.imageHint}
            />
            <div className="absolute inset-0 bg-primary/80" />
            <div className="relative z-10 container mx-auto flex h-full items-center justify-center px-4">
                <h2 className="text-4xl font-bold text-primary-foreground text-center drop-shadow-lg">About the Secretariat</h2>
            </div>
          </div>
        )}
      <div className="relative py-16 lg:py-24">
        {aboutContentBg && (
          <Image
            src={aboutContentBg.imageUrl}
            alt={aboutContentBg.description}
            fill
            className="object-cover object-top"
            data-ai-hint={aboutContentBg.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4 text-lg leading-relaxed text-foreground/80 bg-card/50 p-6 rounded-lg shadow-inner">
                <p>
                  The FCT YOUTH & SPORT DEVELOPMENT SECRETARIAT (FCTAYDS) is an administrative structure under the Federal Capital Territory Administration (FCTA) established in 2024 by President Bola Ahmed Tinubu, GCFR. Also approving the appointment of Mandate Secretary Hon. Ango Abdullahi Suleiman and the Permanent Secretary Mrs. Nathan Nancy.
                </p>
                <p>
                  The Fourth Schedule-Regulation 12 (1)(d) of 2004. The Secretariat is headed by the Mandate Secretary with seven (7) Departments, namely: Administration & Finance, Youth Development and Planning, Sport, and Accounting.
                </p>
                <p>
                  Through the departments, YDS executes her core mandates. YDS has total staff strength of 422 distributed across the seven departments in its headquarters at Cyprian Ekwensi Centre for Arts and Culture, Area 10, outpost offices at Area 3 and other facilities located in various parts of the FCT.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70">
                      To provide strong support and an enabling environment to ensure that FCT Youth realize their potential.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70">
                      To inculcate knowledge, skills and positive attitudes in FCT Youths (15-29 years of Age) for self-reliance and Nation building, as stipulated in the revised National Youth policy of Nigeria 2019-2023.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/80 backdrop-blur-sm sm:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Core Mandate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70">
                      To implement programmes, policies and projects on Youth Policy and other approved instruments on Youth Development.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <aside>
              {selectedLeader ? (
                <LeadershipProfile leader={selectedLeader} onBack={() => setSelectedLeader(null)} />
              ) : (
                <LeadershipList onSelectLeader={setSelectedLeader} />
              )}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
    
