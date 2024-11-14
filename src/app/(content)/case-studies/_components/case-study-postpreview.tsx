import Link from 'next/link'
import { CaseStudy } from '@/sanity/types'
import { urlForImage } from '@/sanity/lib/image'
import { CaseStudyCoverImage } from './case-study-cover-image'
import { CaseStudyDateFormatter } from './case-study-dateformatter'
import { cn } from '@/lib/utils'

interface CaseStudyPreviewProps {
  caseStudy: CaseStudy
  preloadImage?: boolean
  imageHeight?: string | number
}

const DEFAULT_IMAGE_HEIGHT = 250

export function CaseStudyPreview({
  caseStudy,
  preloadImage,
  imageHeight = DEFAULT_IMAGE_HEIGHT,
}: CaseStudyPreviewProps) {
  const { title, mainImage, publishedAt, excerpt, slug } = caseStudy
  const imageUrl = mainImage ? urlForImage(mainImage).url() : ''
  const caseStudyUrl = `/case-studies/${slug}`

  return (
    <div className="group flex flex-col space-y-4 rounded-lg transition-all duration-300 hover:shadow-md dark:hover:shadow-secondary/5">
      {mainImage && (
        <div className="relative mb-2 w-full overflow-hidden rounded-lg" style={{ height: imageHeight }}>
          <Link href={caseStudyUrl}>
            <CaseStudyCoverImage
              preloadImage={preloadImage}
              title={title}
              src={imageUrl}
              alt={`Cover image for ${title}`}
              className={cn(
                'object-cover transition-transform duration-300',
                'group-hover:scale-105'
              )}
            />
          </Link>
        </div>
      )}

      <div className="flex flex-col space-y-4 px-1">
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-semibold leading-snug text-foreground">
            <Link 
              href={caseStudyUrl} 
              className="hover:text-primary hover:underline"
            >
              {title}
            </Link>
          </h2>

          <div className="flex flex-row items-center space-x-2 text-sm">
            <span className="text-muted-foreground">
              <CaseStudyDateFormatter dateString={publishedAt} />
            </span>
          </div>
        </div>

        {excerpt && (
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {excerpt}
          </p>
        )}
      </div>
    </div>
  )
}
