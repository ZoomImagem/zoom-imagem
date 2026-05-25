export interface MuralItem {
  id: string;
  title: string;
  description?: string;
  date?: string;
  /** Lado em que o card será posicionado na timeline */
  side: "left" | "right";
  link: string;
}

export const items: MuralItem[] = [
  {
    id: "1",
    date: "· 2026 ·",
    title: "Metrôs, trens e túneis: por que ambientes de alto fluxo geram campanhas memoráveis?",
    description:
      "Entenda por que campanhas em metrôs, trens e túneis continuam gerando impacto, frequência e lembrança de marca em ambientes urbanos.",
    side: "left",
    link:""
  },
  {
    id: "2",
    date: "· 2026 ·",
    title: "O que é OOH e por que grandes marcas continuam investindo em mídia exterior?",
    description:
      "Descubra o que é OOH, como funciona a mídia exterior e por que grandes marcas continuam investindo em publicidade fora de casa.",
    side: "right",
    link:""
  },
  {
    id: "3",
    date: "· 2026 ·",
    title: "Projetos Especiais de Comunicação | Experiências de Marca",
    description:
      "Descubra como projetos especiais ajudam marcas a criar campanhas urbanas memoráveis e experiências fora do padrão.",
    side: "left",
    link:""
  },
];
