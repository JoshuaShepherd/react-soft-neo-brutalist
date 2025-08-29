import { ChunkyNavigation } from '@/components/layout/chunky-navigation';
import { BoldFooter } from '@/components/layout/bold-footer';
import { HeroBlock } from '@/components/sections/hero-block';
import { FeatureBlocks } from '@/components/sections/feature-blocks';
import { StatsBlocks } from '@/components/sections/stats-blocks';
import { TestimonialBlocks } from '@/components/sections/testimonial-blocks';
import { PricingBlocks } from '@/components/sections/pricing-blocks';
import { FAQAccordion } from '@/components/sections/faq-accordion';
import { NewsletterBlock } from '@/components/sections/newsletter-block';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ChunkyNavigation />
      <HeroBlock />
      <FeatureBlocks />
      <StatsBlocks />
      <TestimonialBlocks />
      <PricingBlocks />
      <FAQAccordion />
      <NewsletterBlock />
      <BoldFooter />
    </main>
  );
}
