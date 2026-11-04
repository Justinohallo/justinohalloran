import type { MetadataRoute } from 'next'
import { caseStudies } from '@/content/case-studies'
import { site } from '@/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/work', '/projects', '/about', ...caseStudies.map((c) => `/work/${c.slug}`)]
  return paths.map((p) => ({ url: `${site.url}${p}` }))
}
