import { type SchemaTypeDefinition } from 'sanity'
import { caseStudy } from './caseStudy'
import { blockContent } from './blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseStudy, blockContent],
}
