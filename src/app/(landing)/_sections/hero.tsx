import { SignedIn } from "@/components/auth";
import { SignedOut } from "@/components/auth";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import Image from "next/image";
import { NewsletterForm } from "@/app/(coming-soon)/newsletter-form";
import { Pill } from "@/components/ui/pill";

export function HeroSection() {
  return (
    <section className="container flex flex-col items-center gap-6 pb-16 pt-12 sm:gap-10 sm:pt-16 lg:flex-row">
      {/* Left content container */}
      <div className="flex flex-1 flex-col items-center gap-6 lg:gap-8">
        <div className="flex justify-center">
          <Pill>Discover like-minded individuals</Pill>
        </div>

        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          <h1 className="max-w-xs text-center text-4xl font-[900] font-heading leading-[1] tracking-tight sm:max-w-xl sm:text-5xl sm:leading-none md:max-w-2xl md:text-6xl lg:text-[4.25rem]">
            Build a cash-flowing internet{" "}
            <span className="inline-grid">
              <span className="text-gradient col-start-1 row-start-1 animate-business-empire-glow blur-xl whitespace-nowrap">
                business empire
              </span>
              <span className="text-gradient col-start-1 row-start-1 whitespace-nowrap">
                business empire
              </span>
            </span>
          </h1>

          <div className="flex flex-col">
            <p className="text-clean-subtext">
              Learn from startup failures and successes in 5 min or less. Get weekly case-studies,
              stories, frameworks, and tactics that will make you a 10x better founder.
            </p>
          </div>

          <div className="w-full max-w-md mx-auto relative">
            <NewsletterForm />
          </div>

          <SignedIn>
            <Button asChild>
              <Link href={"/dashboard"}>View Dashboard</Link>
            </Button>
          </SignedIn>
        </div>
      </div>

      {/* Right content (iPhone) container */}
      <div className="relative flex w-full max-w-[400px] flex-1 items-center justify-center lg:max-w-none">
        <div className="h-[160vw] max-h-[780px] min-h-[580px] w-[85vw] min-w-[280px] max-w-[400px] overflow-hidden lg:max-h-[750px] lg:max-w-[370px]">
          <Iphone15Pro
            className="size-full"
            src="/email.webp"
            alt="Email preview"
            width={389}
            height={843}
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-primary/5 [filter:blur(80px)]" />
      </div>
    </section>
  );
}
