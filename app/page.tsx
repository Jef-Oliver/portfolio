import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SalesHero from '@/components/sections/sales/SalesHero';
import ProductsGrid from '@/components/sections/sales/ProductsGrid';
import RestaurantePromo from '@/components/sections/sales/RestaurantePromo';
import SocialProof from '@/components/sections/sales/SocialProof';
import Testimonials from '@/components/sections/sales/Testimonials';
import SalesCTA from '@/components/sections/sales/SalesCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Header />
      <SalesHero />
      <ProductsGrid />
      <RestaurantePromo />
      <SocialProof />
      <Testimonials />
      <SalesCTA />
      <Footer />
    </main>
  );
}