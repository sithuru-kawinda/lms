import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { DashboardTabs } from '../components/DashboardTabs';
import { FeaturesPage } from './FeaturesPage';
import { ContactPage } from './ContactPage';
import { FaqPage } from './FaqPage';
import { GuidePage } from './GuidePage';
import { PricingPage } from './PricingPage';
import { Navbar } from '../components/Navbar';
import { SriLankaSection } from '../components/SriLankaSection';
import {
  Capabilities, Features, FinalCTA, Footer, Hero, HowItWorks, Problems, Showcase, Values,
} from '../components/Sections';

const titles: Record<string, string> = {
  '/': 'ClassLms — Modern LMS for Teachers & Educational Institutes',
  '/features': 'Features — ClassLms',
  '/how-it-works': 'How It Works — ClassLms',
  '/pricing': 'Pricing — ClassLms',
  '/faq': 'FAQ — ClassLms',
  '/contact': 'Contact — ClassLms',
};

export function Layout() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] ?? titles['/'];
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return (
    <>
      <Navbar />
      <main className={pathname === '/' ? '' : 'page'}>
        <Outlet />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export const Home = () => (
  <>
    <Hero />
    <Capabilities />
    <Problems />
    <SriLankaSection />
    <DashboardTabs />
  </>
);
export { FeaturesPage };
export const HowItWorksPage = () => <GuidePage />;
export { PricingPage };
export const FAQPage = FaqPage;
export { ContactPage };
