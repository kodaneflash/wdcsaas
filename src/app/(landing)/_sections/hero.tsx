import { SignedIn } from "@/components/auth";
import { SignedOut } from "@/components/auth";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
      <Container className="py-8 md:py-12 lg:py-16">
        <div className="flex flex-col md:flex-row gap-y-14 w-full justify-between items-center">
          <div className="flex-1">
            <Badge className="text-sm md:text-base">
              Discover like-minded individuals
            </Badge>
            <h1 className="text-5xl md:text-7xl max-w-3xl mt-10 leading-[1.2] font-semibold">
              90% of startups fail. Learn how not to be one of them.
            </h1>
            <p className="mt-5  text-clean-subtext text-foreground">
              Learn from startup failures and successes in 5 min or less. Get weekly case-studies,
              stories, frameworks, and tactics that will make you a 10x better
              founder.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-10">
              <SignedIn>
                <Button asChild>
                  <Link href={"/dashboard"}>View Dashboard</Link>
                </Button>
              </SignedIn>

              <SignedOut>
                <Button asChild>
                  <Link href={"/sign-in"}>Create an Account</Link>
                </Button>
              </SignedOut>
            </div>
          </div>
          <div className="w-full max-w-[400px] md:w-[400px]">
            <Iphone15Pro className="w-full h-auto">
              <Image
                src="/email.webp"
                alt="Email preview"
                width={389}
                height={843}
                className="w-full h-full object-cover"
                priority
              />
            </Iphone15Pro>
          </div>
        </div>
      </Container>
    </>
  );
}
