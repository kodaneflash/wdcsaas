import { CaseStudy } from '@/sanity/types'
import { urlForImage } from '@/sanity/lib/image'
import { CaseStudyCoverImage } from './case-study-cover-image'
import { CaseStudyDateFormatter } from './case-study-dateformatter'
import { cn } from '@/lib/utils'

interface CaseStudyHeaderProps {
  caseStudy: CaseStudy
}

export function CaseStudyHeader({ caseStudy }: CaseStudyHeaderProps) {
  const { title, publishedAt, excerpt, mainImage } = caseStudy
  const imageUrl = mainImage ? urlForImage(mainImage).url() : ''

  return (
    <div className="flex flex-1 flex-col">
      <div className={cn('border-b py-8', 'dark:border-border')}>
        <div className="mx-auto flex max-w-3xl flex-col space-y-4">
          <h1 className="font-heading text-3xl font-semibold text-foreground xl:text-5xl">
            {title}
          </h1>

          <div>
            <span className="text-muted-foreground">
              <CaseStudyDateFormatter dateString={publishedAt} />
            </span>
          </div>

          {excerpt && (
            <h2 
              className="text-base text-muted-foreground xl:text-lg"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
          )}
        </div>
      </div>

      {mainImage && (
        <div className="relative mx-auto mt-8 flex h-[400px] w-full max-w-3xl justify-center">
          <CaseStudyCoverImage
            preloadImage
            className="rounded-lg object-cover shadow-md"
            title={title}
            src={imageUrl}
            alt={`Cover image for ${title}`}
          />
        </div>
      )}
    </div>
  )
}