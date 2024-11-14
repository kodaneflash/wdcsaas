"use client";

import { subscribeEmailAction } from "@/app/(coming-soon)/actions";
import { LoaderButton } from "@/components/loader-button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Terminal, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useServerAction } from "zsa-react";
import { SocialProof } from "@/components/ui/social-proof";

export function NewsletterForm() {
  const { toast } = useToast();
  const ref = useRef<HTMLFormElement>(null);
  const { execute, status, isError, error } = useServerAction(
    subscribeEmailAction,
    {
      onSuccess() {
        ref.current?.reset();
        toast({
          title: "Success",
          description: "You have been subscribed to our newsletter.",
        });
      },
      onError({ err }) {
        console.log("error", err.message);
      },
    }
  );

  return (
    <>
      <form
        ref={ref}
        className="flex items-center gap-2 w-full max-w-[440px] mx-auto"
        onSubmit={async (event) => {
          event.preventDefault();
          const form = event.target as HTMLFormElement;
          const formData = new FormData(form);
          const email = formData.get("email") as string;
          await execute({ email });
        }}
      >
        <Label className="sr-only" htmlFor="email">
          Email address
        </Label>
        <Input
          required
          type="email"
          name="email"
          className="h-12 flex-1 min-w-0 rounded-xl bg-white border-2 border-gray-200 text-gray-600 placeholder:text-gray-400 text-center"
          id="email"
          placeholder="Enter your email..."
        />

        <LoaderButton 
          isLoading={status === "pending"}
          className="h-12 shrink-0 px-8 rounded-xl whitespace-nowrap font-medium btn-gradient text-white"
        >
          <span className="flex items-center justify-center">
            {status === "pending" ? "Subscribing..." : "Subscribe"}
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </span>
        </LoaderButton>
      </form>

      {(status === "success" || isError) && (
        <div className="mt-4 w-52 mx-auto">
          {status === "success" && (
            <Alert variant="success" className="rounded-lg">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Successfully subscribed</AlertTitle>
              <AlertDescription>
                You&apos;ll receive our weekly case studies and founder insights!
              </AlertDescription>
            </Alert>
          )}

          {isError && (
            <Alert variant="destructive" className="rounded-lg">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Something went wrong</AlertTitle>
              <AlertDescription>{error.message}</AlertDescription>
            </Alert>
          )}
        </div>
      )}

      <div className="mt-8 flex justify-center lg:justify-end lg:pr-12">
        <SocialProof />
      </div>
    </>
  );
}
