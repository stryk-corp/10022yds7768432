import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Stats from '@/components/sections/stats';
import About from '@/components/sections/about';
import Parliament from '@/components/sections/parliament';
import Opportunities from '@/components/sections/opportunities';
import MediaCenter from '@/components/sections/media-center';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground/80">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Parliament />
        <Opportunities />
        <MediaCenter />
      </main>
      <Footer />
    </div>
  );
}
