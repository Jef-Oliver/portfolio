import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Marquee from '@/components/ui/Marquee';
import FloatingGameCharacters from '@/components/ui/FloatingGameCharacters';
import CrosshairCursor from '@/components/ui/CrosshairCursor';
import VisitorRankingWidget from '@/components/ui/VisitorRankingWidget';
import { GameProvider } from '@/context/GameContext';
import SalesHero from '@/components/sections/sales/SalesHero';
import ProductsGrid from '@/components/sections/sales/ProductsGrid';
import RestaurantePromo from '@/components/sections/sales/RestaurantePromo';
import SocialProof from '@/components/sections/sales/SocialProof';
import Testimonials from '@/components/sections/sales/Testimonials';
import SalesCTA from '@/components/sections/sales/SalesCTA';

export default function Home() {
  return (
    <GameProvider>
      <main className="min-h-screen bg-dark relative">
        <CrosshairCursor />
        <FloatingGameCharacters />
        <VisitorRankingWidget />
        <Header />
        <SalesHero />
        <Marquee variant="hero" />
        <ProductsGrid />
        <RestaurantePromo />
        <Marquee variant="divider" />
        <SocialProof />
        <Testimonials />
        <SalesCTA />
        <Footer />
      </main>
    </GameProvider>
  );
}