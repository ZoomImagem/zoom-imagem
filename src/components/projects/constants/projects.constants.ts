export interface Project {
  id: number;
  title: string;
  aplication: string;
  image: string;
  images?: string[];
  tag: string;
}

export const categories = [
  "Todos",
  "OOH",
  "PDV",
  "Projetos especiais",
  "Linha ECO",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Disney",
    aplication: "Cenografia",
    image: "/images/pdv/disney/disney1.webp",
    images: [
      "/images/pdv/disney/disney1.webp",
      "/images/pdv/disney/disney2.webp",
      "/images/pdv/disney/disney3.webp",
    ],
    tag: "PDV",
  },
  {
    id: 2,
    title: "Marvel",
    aplication: "Cenografia",
    image: "/images/pdv/herois/heroi1.jpg",
    images: [
      "/images/pdv/herois/heroi1.jpg",
      "/images/pdv/herois/heroi2.jpg",
      "/images/pdv/herois/heroi3.webp",
    ],
    tag: "PDV",
  },
  {
    id: 3,
    title: "Mickey Mouse",
    aplication: "Stands",
    image: "/images/pdv/mickey/mickey1.jpg",
    images: [
      "/images/pdv/mickey/mickey1.jpg",
      "/images/pdv/mickey/mickey2.jpg",
      "/images/pdv/mickey/mickey3.jpg",
    ],
    tag: "PDV",
  },
  {
    id: 4,
    title: "Princesas",
    aplication: "Cenografia",
    image: "/images/pdv/princesas/princesas1.jpg",
    images: ["/images/pdv/princesas/princesas1.jpg", "/images/pdv/princesas/princesas2.jpg"],
    tag: "PDV",
  },
  {
    id: 5,
    title: "Projeto Personalizado",
    aplication: "Campanhas especiais",
    image: "/images/pdv/princesas/princesa.jpg",
    images: ["/images/senna.jpg", "/images/senna.jpg", "/images/senna.jpg"],
    tag: "OOH",
  },
  {
    id: 6,
    title: "Stopper de Prateleira",
    aplication: "Materiais de apoio",
    image: "/images/senna.jpg",
    images: ["/images/senna.jpg", "/images/senna.jpg"],
    tag: "Projetos especiais",
  },
  {
    id: 7,
    title: "Stopper de Prateleira",
    aplication: "Materiais de apoio",
    image: "/images/senna.jpg",
    images: ["/images/senna.jpg", "/images/senna.jpg"],
    tag: "Projetos especiais",
  },
  {
    id: 8,
    title: "Stopper de Prateleira",
    aplication: "Materiais de apoio",
    image: "/images/senna.jpg",
    images: ["/images/senna.jpg", "/images/senna.jpg"],
    tag: "Projetos especiais",
  },
  {
    id: 9,
    title: "Stopper de Prateleira",
    aplication: "Materiais de apoio",
    image: "/images/senna.jpg",
    images: ["/images/senna.jpg", "/images/senna.jpg"],
    tag: "Projetos especiais",
  },
];
