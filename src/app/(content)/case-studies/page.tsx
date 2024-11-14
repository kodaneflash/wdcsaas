import { Suspense } from 'react'
import { client } from '@/sanity/lib/client'
import { CaseStudy } from '@/sanity/types'
import { caseStudiesQuery } from '@/sanity/lib/queries'
import { CaseStudyHeader } from './_components/case-study-header'
import { CaseStudyPreview } from './_components/case-study-postpreview'

async function getCaseStudies(): Promise<CaseStudy[]> {
  return client.fetch(caseStudiesQuery)
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="container mx-auto px-5 py-12">
      {caseStudies.length > 0 && (
        <>
          <CaseStudyHeader caseStudy={caseStudies[0]} />
          
          {caseStudies.length > 1 && (
            <section className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-foreground">More Case Studies</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Suspense fallback={<div>Loading...</div>}>
                  {caseStudies.slice(1).map((caseStudy) => (
                    <CaseStudyPreview
                      key={caseStudy._id}
                      caseStudy={caseStudy}
                      preloadImage={false}
                    />
                  ))}
                </Suspense>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  )
}
