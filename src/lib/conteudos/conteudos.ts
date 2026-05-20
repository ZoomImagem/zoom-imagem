import { NewsTag } from '@/presentation/contents/fragments/news'
import { ComponentType } from 'react'

type Page = {
  label: string
  slug: string
  component: ComponentType
}

export const conteudos: Page[] = [
  { label: 'Notícias', slug: 'noticias', component: NewsTag }
  // { label: 'Blog', slug: 'blog', component: BlogTag },
]
