export interface Project {
  id: number;
  title: string;
  aplication: string;
  image: string;
  images?: string[];
  tag: string;
}

export const categories = ["Todos", "OOH", "PDV", "Projetos especiais", "Linha ECO"];

export const projects: Project[] = [
  {
    id: 1,
    title: "Linha ECO",
    aplication: "Eventos e ativações",
    image: "/images/senna.jpg",
    images: ["/images/senna.jpg", "/images/senna.jpg", "/images/senna.jpg"],
    tag: "Linha ECO",
  },
  {
    id: 2,
    title: "Out of home",
    aplication: "Mobiliario urbano",
    image: "/images/senna.jpg",
    images: ["/images/senna.jpg", "/images/senna.jpg"],
    tag: "OOH",
  },
  {
    id: 3,
    title: "Pontos de venda - PDV",
    aplication: "Pontos de venda",
    image: "/images/senna.jpg",
    images: ["/images/senna.jpg", "/images/senna.jpg"],
    tag: "PDV",
  },
  {
    id: 4,
    title: "Pontos de venda",
    aplication: "Materiais de apoio",
    image: "/images/senna.jpg",
    images: ["/images/senna.jpg", "/images/senna.jpg"],
    tag: "PDV",
  },
  {
    id: 5,
    title: "Projeto Personalizado",
    aplication: "Campanhas especiais",
    image: "/images/senna.jpg",
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