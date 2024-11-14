import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { CaseStudy } from '@/sanity/types'
import { caseStudyBySlugQuery } from '@/sanity/lib/queries'
import { CaseStudyCoverImage } from '../_components/case-study-cover-image'
import { CaseStudyDateFormatter } from '../_components/case-study-dateformatter'

interface PageProps {
  params: {
    slug: string
  }
}

async function getCaseStudy(slug: string): Promise<CaseStudy> {
  const caseStudy = await client.fetch(caseStudyBySlugQuery, { 
    slug: slug.toString() 
  })
  
  if (!caseStudy) {
    notFound()
  }

  return caseStudy
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const caseStudy = await getCaseStudy(params.slug)

  return {
    title: caseStudy.title,
    description: caseStudy.excerpt,
    openGraph: caseStudy.mainImage ? {
      images: [
        {
          url: urlForImage(caseStudy.mainImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    } : undefined,
  }
}

const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const imageUrl = urlForImage(value).url()
      return (
        <div className="relative w-full h-96 my-8">
          <CaseStudyCoverImage
            title={value.alt || 'Case study image'}
            src={imageUrl}
            alt={value.alt || 'Case study image'}
            className="rounded-lg"
          />
        </div>
      )
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = value?.href.startsWith('/') ? undefined : 'noopener noreferrer'
      return (
        <a 
          href={value?.href} 
          rel={rel}
          className="text-primary hover:underline"
        >
          {children}
        </a>
      )
    },
  },
}

export default async function CaseStudyPage({ params }: PageProps) {
  const caseStudy = await getCaseStudy(params.slug)
  const imageUrl = caseStudy.mainImage ? urlForImage(caseStudy.mainImage).url() : ''

  return (
    <article className="container mx-auto px-5 py-12">
      <header className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 text-center max-w-4xl">
          {caseStudy.title}
        </h1>
        
        <div className="mb-8">
          <CaseStudyDateFormatter dateString={caseStudy.publishedAt} />
        </div>

        {imageUrl && (
          <div className="relative w-full h-[60vh] mb-8 rounded-lg overflow-hidden max-w-5xl">
            <CaseStudyCoverImage
              title={caseStudy.title}
              src={imageUrl}
              alt={`Cover image for ${caseStudy.title}`}
              preloadImage={true}
              className="rounded-lg"
            />
          </div>
        )}
      </header>

      <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-heading prose-a:text-primary">
        {caseStudy.content && (
          <PortableText
            value={caseStudy.content}
            components={PortableTextComponents}
          />
        )}
      </div>
    </article>
  )
}
