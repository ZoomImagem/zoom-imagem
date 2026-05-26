import { Article } from "./post.types";

export const articles: Article[] = [
  {
    id: "art-001",
    slug: "publicidade-metro-trens-tuneis",
    category: "Publicidade OOH",
    readingTime: "8 min de leitura",
    title:
      "Metrôs, trens e túneis: por que ambientes de alto fluxo geram campanhas memoráveis?",
    lede: "Todos os dias, milhares de pessoas circulam por metrôs, trens e túneis nas grandes cidades brasileiras — e essa rotina transforma o trajeto em um dos territórios mais estratégicos para a comunicação de marca.",
    author: {
      name: "Equipe Zoom",
      initial: "E",
    },
    publishedAt: "Publicado em 24 de maio de 2026",
    content: [
      {
        type: "paragraph",
        text: "O fluxo constante de pessoas em ambientes de transporte urbano transforma esses espaços em territórios estratégicos para campanhas de comunicação que precisam gerar presença, repetição e lembrança de marca.",
      },
      {
        type: "paragraph",
        text: "Ao contrário de outras mídias que disputam atenção por poucos segundos, a publicidade em ambientes de transporte cria contato recorrente com o público ao longo da rotina — e é justamente essa recorrência que constrói memória.",
      },
      {
        type: "heading",
        text: "Por que campanhas em transporte urbano funcionam?",
      },
      {
        type: "paragraph",
        text: "Esses ambientes oferecem três vantagens claras para marcas que buscam construir presença consistente no cotidiano urbano:",
      },
      {
        type: "advantages",
        items: [
          {
            number: "01",
            title: "Frequência",
            description: "O público passa pelos mesmos trajetos diariamente.",
          },
          {
            number: "02",
            title: "Repetição",
            description:
              "A marca aparece diversas vezes na rotina do consumidor.",
          },
          {
            number: "03",
            title: "Escala",
            description: "Milhares de impactos todos os dias.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Essa combinação aumenta a percepção e a memorização — dois indicadores essenciais para qualquer marca que queira ocupar espaço na mente do consumidor.",
      },
      {
        type: "heading",
        text: "Execução técnica faz diferença",
      },
      {
        type: "paragraph",
        text: "Campanhas em metrôs, trens e túneis não dependem apenas de criatividade. A entrega depende de processos rigorosos que envolvem:",
      },
      {
        type: "list",
        items: [
          "Planejamento técnico",
          "Aprovação operacional",
          "Logística precisa",
          "Instalação segura",
        ],
      },
      {
        type: "paragraph",
        text: "Sem execução consistente, o impacto visual se perde. A qualidade da operação é tão importante quanto o conceito criativo.",
      },
      {
        type: "heading",
        text: "Quando faz sentido investir?",
      },
      {
        type: "paragraph",
        text: "Esse tipo de mídia funciona especialmente bem em momentos onde frequência e cobertura urbana são determinantes para o sucesso da campanha:",
      },
      {
        type: "list",
        items: [
          "Lançamentos de produto",
          "Branding",
          "Campanhas de awareness",
          "Eventos",
          "Entretenimento",
        ],
      },
      {
        type: "quote",
        text: "Onde a rotina passa, a marca se instala.",
      },
      {
        type: "cases",
        items: [
          {
            brand: "Eisenbahn",
            title: "AC/DC no metrô",
            thumbnail: "/images/projetos-especiais/eisenbahn/eisenbahn1.png",
            instagramUrl: "https://www.instagram.com/p/DVeVx8kERPH/",
          },
          {
            brand: "Seara",
            title: "Bridgerton",
            thumbnail: "/images/projetos-especiais/seara/seara1.jpeg",
            instagramUrl: "https://www.instagram.com/p/DVyQiD1jWaW/",
          },
          {
            brand: "Lacta",
            title: "Guinness World Records",
            thumbnail: "/images/projetos-especiais/lacta/lacta3.webp",
            instagramUrl: "https://www.instagram.com/p/DWgvG0FjdWR/",
          },
        ],
      },
      {
        type: "cta",
        data: {
          text: "Quer levar sua marca para ambientes de alto fluxo?",
          linkLabel: "Nossas soluções em OOH",
          href: "/solucoes/out-of-home",
        },
      },
    ],
  },

  {
    id: "art-002",
    slug: "o-que-e-ooh",
    category: "Publicidade OOH",
    readingTime: "5 min de leitura",
    title:
      "O que é OOH e por que grandes marcas continuam investindo em mídia exterior?",
    lede: "Mesmo com o avanço do digital, a mídia fora de casa segue como uma das ferramentas mais sólidas para construir presença, lembrança e credibilidade de marca.",
    author: {
      name: "Equipe Zoom",
      initial: "E",
    },
    publishedAt: "Publicado em 20 de maio de 2026",
    content: [
      {
        type: "paragraph",
        text: "OOH significa Out of Home, ou publicidade realizada fora de casa. Esse formato reúne diferentes tipos de mídia que ocupam o espaço urbano e impactam o público durante a rotina.",
      },
      {
        type: "paragraph",
        text: "Entre os principais formatos estão:",
      },
      {
        type: "list",
        items: [
          "Outdoors",
          "Relógios urbanos",
          "Abrigos de ônibus",
          "Painéis",
          "Metrôs",
          "Túneis",
        ],
      },
      {
        type: "paragraph",
        text: "Mesmo com o crescimento das mídias digitais, o OOH continua sendo uma das ferramentas mais fortes de construção de marca — justamente por operar no mundo físico, onde a atenção não compete com algoritmos.",
      },
      {
        type: "heading",
        text: "Por que o OOH continua relevante?",
      },
      {
        type: "paragraph",
        text: "O formato sustenta sua força em quatro pilares que poucas mídias conseguem combinar com a mesma consistência:",
      },
      {
        type: "advantages",
        items: [
          {
            number: "01",
            title: "Presença física",
            description:
              "A marca ocupa espaços reais no cotidiano das pessoas.",
          },
          {
            number: "02",
            title: "Alcance massivo",
            description: "Impacta milhares de pessoas diariamente.",
          },
          {
            number: "03",
            title: "Repetição",
            description: "A exposição recorrente aumenta a lembrança de marca.",
          },
          {
            number: "04",
            title: "Credibilidade",
            description:
              "Marcas presentes na rua ampliam a percepção de grandeza e solidez.",
          },
        ],
      },
      {
        type: "heading",
        text: "OOH não é só mídia. É execução.",
      },
      {
        type: "paragraph",
        text: "O resultado de uma campanha OOH depende menos da criatividade isolada e mais da qualidade da entrega operacional. Quatro fatores definem o sucesso:",
      },
      {
        type: "list",
        items: [
          "Escolha do ponto",
          "Qualidade de impressão",
          "Acabamento",
          "Instalação",
        ],
      },
      {
        type: "quote",
        text: "No OOH, a execução é o que separa presença de impacto.",
      },
      {
        type: "cases",
        items: [
          {
            brand: "Eisenbahn",
            title: "AC/DC no metrô",
            thumbnail: "/images/projetos-especiais/eisenbahn/eisenbahn1.png",
            instagramUrl: "https://www.instagram.com/p/DVeVx8kERPH/",
          },
          {
            brand: "Seara",
            title: "Bridgerton",
            thumbnail: "/images/projetos-especiais/seara/seara1.jpeg",
            instagramUrl: "https://www.instagram.com/p/DVyQiD1jWaW/",
          },
          {
            brand: "Lacta",
            title: "Guinness World Records",
            thumbnail: "/images/projetos-especiais/lacta/lacta3.webp",
            instagramUrl: "https://www.instagram.com/p/DWgvG0FjdWR/",
          },
        ],
      },
      {
        type: "cta",
        data: {
          text: "Quer levar sua marca para ambientes de alto fluxo?",
          linkLabel: "Nossas soluções em OOH",
          href: "/solucoes/out-of-home",
        },
      },
    ],
  },

  {
    id: "art-003",
    slug: "projetos-especiais-de-marca",
    category: "Projetos Especiais",
    readingTime: "5 min de leitura",
    title:
      "Como projetos especiais ajudam marcas a sair do padrão no ambiente urbano",
    lede: "Quando o formato tradicional não basta, projetos especiais transformam o espaço urbano em palco para experiências capazes de gerar interação, lembrança e repercussão.",
    author: {
      name: "Equipe Zoom",
      initial: "E",
    },
    publishedAt: "Publicado em 18 de maio de 2026",
    content: [
      {
        type: "paragraph",
        text: "Nem toda campanha precisa seguir formatos tradicionais. Algumas marcas precisam ir além do plano de mídia comum e criar experiências capazes de gerar interação, lembrança e repercussão espontânea.",
      },
      {
        type: "paragraph",
        text: "É aqui que entram os projetos especiais — formatos sob medida, pensados para causar impacto a partir da combinação entre conceito criativo, espaço urbano e execução técnica.",
      },
      {
        type: "heading",
        text: "O que caracteriza um projeto especial?",
      },
      {
        type: "paragraph",
        text: "São intervenções que rompem com o padrão da mídia exterior convencional. Podem assumir diferentes formas, sempre com o objetivo de surpreender o público e amplificar a presença da marca:",
      },
      {
        type: "list",
        items: [
          "Ativações urbanas",
          "Cenografia",
          "Instalações personalizadas",
          "Experiências sensoriais",
          "Estruturas de grande formato",
        ],
      },
      {
        type: "paragraph",
        text: "Em todos esses formatos, o que diferencia um projeto especial de uma campanha tradicional é a sua capacidade de transformar o ambiente — não apenas ocupá-lo.",
      },
      {
        type: "heading",
        text: "Criatividade precisa funcionar na prática",
      },
      {
        type: "paragraph",
        text: "Uma ideia ousada só vira projeto quando consegue ser entregue com segurança, estética e dentro do prazo. Por isso, a execução de um projeto especial envolve frentes técnicas que precisam caminhar juntas:",
      },
      {
        type: "list",
        items: ["Engenharia", "Produção", "Logística", "Instalação"],
      },
      {
        type: "paragraph",
        text: "Sem essa estrutura, mesmo o conceito mais criativo corre o risco de não chegar ao público da forma como foi imaginado.",
      },
      {
        type: "quote",
        text: "Projeto especial é onde a ideia encontra a rua.",
      },
      {
        type: "cases",
        items: [
          {
            brand: "Eisenbahn",
            title: "AC/DC no metrô",
            thumbnail: "/images/projetos-especiais/eisenbahn/eisenbahn1.png",
            instagramUrl: "https://www.instagram.com/p/DVeVx8kERPH/",
          },
          {
            brand: "Seara",
            title: "Bridgerton",
            thumbnail: "/images/projetos-especiais/seara/seara1.jpeg",
            instagramUrl: "https://www.instagram.com/p/DVyQiD1jWaW/",
          },
          {
            brand: "Lacta",
            title: "Guinness World Records",
            thumbnail: "/images/projetos-especiais/lacta/lacta3.webp",
            instagramUrl: "https://www.instagram.com/p/DWgvG0FjdWR/",
          },
        ],
      },
      {
        type: "cta",
        data: {
          text: "Quer levar sua marca para ambientes de alto fluxo?",
          linkLabel: "Nossas soluções em Projetos especiais",
          href: "/solucoes/projetos-especiais",
        },
      },
    ],
  },
];

/**
 * Helper para buscar um artigo pelo slug.
 */
export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((article) => article.slug === slug);

/**
 * Helper para buscar um artigo pelo ID.
 */
export const getArticleById = (id: string): Article | undefined =>
  articles.find((article) => article.id === id);
