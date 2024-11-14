import type { Image, Slug } from 'sanity'
import type { PortableTextBlock } from '@portabletext/types'

export interface CaseStudy {
  _id: string
  _type: 'caseStudy'
  title: string
  slug: Slug
  mainImage?: Image
  excerpt?: string
  content?: PortableTextBlock[]
  body?: PortableTextBlock[]
  publishedAt: string
}

export interface SanityImage extends Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
  alt?: string
}

export interface Author {
  _id: string
  name: string
  image?: SanityImage
  bio?: PortableTextBlock[]
}

// For future paywall implementation
export interface PaywallContent {
  isPaywalled: boolean
  previewContent?: PortableTextBlock[]
  fullContent: PortableTextBlock[]
}
