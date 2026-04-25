import { Recycle, Package, Leaf, Zap } from "lucide-react";

export const solutions = [
  {
    icon: Recycle,
    title: "Materiais recicláveis",
    description: "Uso de insumos com menor impacto ambiental.",
  },
  {
    icon: Package,
    title: "Estruturas reutilizáveis",
    description: "Projetos pensados para múltiplas utilizações.",
  },
  {
    icon: Leaf,
    title: "Redução de resíduos",
    description: "Processos produtivos otimizados.",
  },
  {
    icon: Zap,
    title: "Projetos sob medida",
    description:
      "Desenvolvimento de soluções sustentáveis específicas para cada campanha.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Análise do projeto",
    desc: "Identificação de oportunidades de redução de impacto.",
  },
  {
    n: "02",
    title: "Definição de materiais",
    desc: "Escolha de soluções adequadas.",
  },
  {
    n: "03",
    title: "Produção",
    desc: "Execução com controle e eficiência.",
  },
  {
    n: "04",
    title: "Implementação",
    desc: "Aplicação no ambiente de campanha.",
  },
];

export interface AmbienteProjects {
  brand: string;
  type: string;
  img: string;
  images?: string[];
}

export const project: AmbienteProjects[] = [
  {
    brand: "Marca A",
    type: "Varejo",
    img: "/images/senna.jpg",
    images: [
      "/images/projects/Chevrolet-01.webp",
      "/images/projects/intelbras1.webp",
    ],
  },
  {
    brand: "Marca B",
    type: "Ambientação",
    img: "/images/senna.jpg",
    images: [
      "/images/projects/Chevrolet-01.webp",
      "/images/projects/intelbras1.webp",
    ],
  },
  {
    brand: "Marca C",
    type: "Mídia Exterior",
    img: "/images/senna.jpg",
    images: [
      "/images/projects/Chevrolet-01.webp",
      "/images/projects/intelbras1.webp",
    ],
  },
  {
    brand: "Marca D",
    type: "Ponto de Venda",
    img: "/images/senna.jpg",
    images: [
      "/images/projects/Chevrolet-01.webp",
      "/images/projects/intelbras1.webp",
    ],
  },
  {
    brand: "Marca E",
    type: "Varejo",
    img: "/images/senna.jpg",
    images: [
      "/images/projects/Chevrolet-01.webp",
      "/images/projects/intelbras1.webp",
    ],
  },
  {
    brand: "Marca F",
    type: "Institucional",
    img: "/images/senna.jpg",
    images: [
      "/images/projects/Chevrolet-01.webp",
      "/images/projects/intelbras1.webp",
    ],
  },
];

export const imagesCta = [
  "/images/senna.jpg",
  "/images/senna.jpg",
  "/images/senna.jpg",
];
