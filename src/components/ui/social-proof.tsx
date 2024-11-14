"use client";

import { Star } from "lucide-react";

import { Avatar, AvatarImage } from "./avatar";

export function SocialProof() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex">
        {/* Avatars */}
        {testimonialImages.map((image, index) => (
          <Avatar 
            key={image.alt}
            className="border-2 border-border first:ml-0 -ml-4"
          >
            <AvatarImage
              alt={image.alt}
              src={image.src}
            />
          </Avatar>
        ))}
      </div>

      <div>
        {/* Star Rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              className="h-5 w-5 fill-yellow-500 text-yellow-500" 
            />
          ))}
        </div>

        {/* Review Text */}
        <span className="mt-1 text-sm font-semibold text-muted-foreground">
          from{" "}
          <span className="text-foreground">1000+</span>
          {" "}reviews
        </span>
      </div>
    </div>
  );
}

// Testimonial image data
const testimonialImages = [
  {
    alt: "@john",
    src: "https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-1.avif"
  },
  {
    alt: "@max", 
    src: "https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-2.avif"
  },
  {
    alt: "@bob",
    src: "https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-3.avif"
  },
  {
    alt: "@emily",
    src: "https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-4.avif"
  },
  {
    alt: "@michael",
    src: "https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/sections-assets/testimonial-5.avif"
  }
]; 