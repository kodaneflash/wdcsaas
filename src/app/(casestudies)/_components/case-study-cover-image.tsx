import Image from 'next/image'
import { cn } from '@/lib/utils'

interface CaseStudyCoverImageProps {
  title: string
  src: string
  alt: string
  preloadImage?: boolean
  className?: string
}

export function CaseStudyCoverImage({ 
  title, 
  src, 
  alt,
  preloadImage = false,
  className 
}: CaseStudyCoverImageProps) {
  return (
    <div className="relative h-full w-full">
      <Image
        className={cn(
          'duration-300 object-cover transition-all hover:opacity-90',
          className
        )}
        src={src}
        alt={alt}
        priority={preloadImage}
        quality={85}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
