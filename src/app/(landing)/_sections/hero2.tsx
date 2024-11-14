import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Sparkle } from 'lucide-react';
import Iphone15Pro from '@/components/ui/iphone-15-pro';

const SubscriptionForm = dynamic(
  () => import('@/app/(coming-soon)/newsletter-form').then(mod => mod.NewsletterForm),
  { ssr: true }
);

function Pill(props: React.PropsWithChildren) {
  return (
    <h2 className={'flex items-center space-x-2 rounded-full px-4 py-2 text-center text-sm text-muted-foreground'}>
      <Sparkle className={'inline-block h-4 text-muted-foreground'} />
      <span>{props.children}</span>
    </h2>
  );
}

function HeroTitle() {
  return (
    <h1 className="max-w-xs text-center text-4xl font-[900] font-heading leading-[1] tracking-tight sm:max-w-xl sm:text-5xl sm:leading-none md:max-w-2xl md:text-6xl lg:text-[4.25rem]">
      <span className="text-glow">Build a cash-flowing internet</span>{" "}
      <span className="inline-grid">
        <span className="text-gradient col-start-1 row-start-1 animate-business-empire-glow blur-xl whitespace-nowrap">
          business empire
        </span>
        <span className="text-gradient col-start-1 row-start-1 whitespace-nowrap">
          business empire
        </span>
      </span>
    </h1>
  );
}

function SubscriptionFormSkeleton() {
  return (
    <div className="w-full max-w-md h-[100px] animate-pulse bg-muted rounded-lg" />
  );
}

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-6 pb-16 pt-12 sm:gap-10 sm:pt-16 lg:flex-row">
      {/* Left content container */}
      <div className="flex flex-1 flex-col items-center gap-6 lg:gap-8">
        <Pill>
          <span>For creators and solopreneurs</span>
        </Pill>

        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          <HeroTitle />
          
          <div className="flex flex-col">
            <p className="text-clean-subtext">
              Join 60,000+ solopreneurs building profitable online businesses. Get weekly case studies, expert interviews, and actionable tips to help you earn more.
            </p>
          </div>

          <Suspense fallback={<SubscriptionFormSkeleton />}>
            <div className="w-full max-w-md mx-auto">
              <SubscriptionForm />
            </div>
          </Suspense>
        </div>
      </div>

      {/* Right content (iPhone) container */}
      <div className="relative flex w-full max-w-[400px] flex-1 items-center justify-center lg:max-w-none">
        <div className="h-[160vw] max-h-[780px] min-h-[580px] w-[85vw] min-w-[280px] max-w-[400px] overflow-hidden lg:max-h-[750px] lg:max-w-[370px]">
          <Iphone15Pro
            className="size-full"
            src="/email.webp"
            borderColor="currentColor"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
} 