import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 기본 URL
  const baseUrl = 'https://profile.hansolbangul.com'

  // 정적 라우트
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ]

  // 프로젝트 동적 라우트
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...projectRoutes]
}
