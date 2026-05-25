// ============================================
// Article Types
// ============================================

/**
 * Vantagem destacada com numeração (ex: "01 Frequência").
 */
export interface Advantage {
  number: string;
  title: string;
  description: string;
}

/**
 * Case real de marca, exibido no rodapé do artigo.
 */
export interface CaseItem {
  /** Nome da marca (ex: "Eisenbahn") */
  brand: string;
  /** Título/descrição curta do case (ex: "AC/DC no metrô") */
  title: string;
  /** Caminho da thumbnail. Salvar em /public/cases/ */
  thumbnail: string;
  /** Link da publicação do Instagram */
  instagramUrl: string;
}

/**
 * Bloco de conteúdo do artigo. O tipo define como o bloco será renderizado.
 *
 * - 'paragraph': parágrafo de texto comum
 * - 'heading': título de seção (h2)
 * - 'advantages': bloco com vantagens numeradas
 * - 'list': lista com bullets destacados
 * - 'quote': frase de fechamento em destaque
 * - 'cases': cards de cases reais com link para o Instagram
 */
export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'advantages'; items: Advantage[] }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'cases'; items: CaseItem[] };

/**
 * Informações do autor do artigo.
 */
export interface Author {
  name: string;
  initial: string;
}

/**
 * Estrutura completa de um artigo do blog.
 */
export interface Article {
  /** ID único, usado em URLs e como key */
  id: string;
  /** Slug da URL: ex. "publicidade-metro-trens-tuneis" */
  slug: string;
  /** Categoria exibida no topo */
  category: string;
  /** Tempo estimado de leitura: ex. "8 min de leitura" */
  readingTime: string;
  /** Título principal do artigo */
  title: string;
  /** Subtítulo/lede em destaque */
  lede: string;
  /** Autor */
  author: Author;
  /** Data de publicação formatada */
  publishedAt: string;
  /** Blocos de conteúdo, renderizados em ordem */
  content: ContentBlock[];
  /** Tags exibidas no rodapé */
  tags: string[];
  /** Meta tags para SEO (opcional) */
  meta?: {
    title: string;
    description: string;
  };
}