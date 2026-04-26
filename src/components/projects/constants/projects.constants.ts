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
    images: [
      "/images/pdv/princesas/princesas1.jpg",
      "/images/pdv/princesas/princesas2.jpg",
    ],
    tag: "PDV",
  },
  {
    id: 5,
    title: "99 Food",
    aplication: "Metrôs e trens",
    image: "/images/projetos-especiais/99food/991.webp",
    images: [
      "/images/projetos-especiais/99food/991.webp",
      "/images/projetos-especiais/99food/992.webp",
      "/images/projetos-especiais/99food/993.webp",
    ],
    tag: "Projetos especiais",
  },
  {
    id: 6,
    title: "FallOut",
    aplication: "Metrôs e trens",
    image: "/images/projetos-especiais/fallout/fallout1.webp",
    images: [
      "/images/projetos-especiais/fallout/fallout1.webp",
      "/images/projetos-especiais/fallout/fallout2.webp",
      "/images/projetos-especiais/fallout/fallout3.webp",
    ],
    tag: "Projetos especiais",
  },
  {
    id: 7,
    title: "Lacta",
    aplication: "Eventos e ativações",
    image: "/images/projetos-especiais/lacta/lacta1.webp",
    images: [
      "/images/projetos-especiais/lacta/lacta1.webp",
      "/images/projetos-especiais/lacta/lacta2.webp",
      "/images/projetos-especiais/lacta/lacta3.webp",
    ],
    tag: "Projetos especiais",
  },
  {
    id: 8,
    title: "Bob Esponja",
    aplication: "Metrôs e trens",
    image: "/images/projetos-especiais/bobesponja/bob3.webp",
    images: [
      "/images/projetos-especiais/bobesponja/bob1.webp",
      "/images/projetos-especiais/bobesponja/bob2.webp",
      "/images/projetos-especiais/bobesponja/bob3.webp",
    ],
    tag: "Projetos especiais",
  },
  {
    id: 9,
    title: "Nubank",
    aplication: "Metrôs e trens",
    image: "/images/projetos-especiais/nubank/nubank3.webp",
    images: [
      "/images/projetos-especiais/nubank/nubank1.webp",
      "/images/projetos-especiais/nubank/nubank2.webp",
      "/images/projetos-especiais/nubank/nubank3.webp",
    ],
    tag: "Projetos especiais",
  },
  {
    id: 10,
    title: "Pepsi",
    aplication: "Metrôs e trens",
    image: "/images/projetos-especiais/pepsi/pepsi1.webp",
    images: [
      "/images/projetos-especiais/pepsi/pepsi1.webp",
      "/images/projetos-especiais/pepsi/pepsi2.webp",
      "/images/projetos-especiais/pepsi/pepsi3.webp",
    ],
    tag: "Projetos especiais",
  },
  {
    id: 11,
    title: "Rexona",
    aplication: "Metrôs e trens",
    image: "/images/projetos-especiais/rexona/rexona3.jpg",
    images: [
      "/images/projetos-especiais/rexona/rexona1.jpg",
      "/images/projetos-especiais/rexona/rexona2.jpg",
      "/images/projetos-especiais/rexona/rexona3.jpg",
      "/images/projetos-especiais/rexona/rexona4.jpg",
      "/images/projetos-especiais/rexona/rexona5.jpg",
    ],
    tag: "Projetos especiais",
  },
  {
    id: 12,
    title: "The Smurfs",
    aplication: "Eventos e ativações",
    image: "/images/projetos-especiais/smurfs/smurfs1.png",
    images: [
      "/images/projetos-especiais/smurfs/smurfs1.png",
      "/images/projetos-especiais/smurfs/smurfs2.png",
      "/images/projetos-especiais/smurfs/smurfs3.png",
    ],
    tag: "Projetos especiais",
  },
  {
    id: 13,
    title: "As Tartarugas Ninjas",
    aplication: "Eventos e ativações",
    image: "/images/projetos-especiais/tartarugas-ninja/tartaruga1.jpg",
    images: [
      "/images/projetos-especiais/tartarugas-ninja/tartaruga1.jpg",
      "/images/projetos-especiais/tartarugas-ninja/tartaruga2.jpg",
      "/images/projetos-especiais/tartarugas-ninja/tartaruga3.jpg",
      "/images/projetos-especiais/tartarugas-ninja/tartaruga4.jpg",
    ],
    tag: "Projetos especiais",
  },
  {
    id: 14,
    title: "Keeta",
    aplication: "Vias urbanas",
    image: "/images/projetos-especiais/keeta/keeta1.webp",
    images: [
      "/images/projetos-especiais/keeta/keeta1.webp",
      "/images/projetos-especiais/keeta/keeta2.webp",
      "/images/projetos-especiais/keeta/keeta3.webp",
    ],
    tag: "Projetos especiais",
  },
  {
    id: 15,
    title: "Round 6",
    aplication: "Metrôs e trens",
    image: "/images/projetos-especiais/round6/r62.png",
    images: [
      "/images/projetos-especiais/round6/r61.png",
      "/images/projetos-especiais/round6/r62.png",
      "/images/projetos-especiais/round6/r63.png",
    ],
    tag: "Projetos especiais",
  },
  {
    id: 16,
    title: "Seara Bridgerton",
    aplication: "Metrôs e trens",
    image: "/images/projetos-especiais/seara/seara1.jpeg",
    images: [
      "/images/projetos-especiais/seara/seara1.jpeg",
      "/images/projetos-especiais/seara/seara2.jpeg",
      "/images/projetos-especiais/seara/seara3.jpeg",
    ],
    tag: "Projetos especiais",
  },
  {
    id: 17,
    title: "Airton Senna",
    aplication: "Metrôs e trens",
    image: "/images/projetos-especiais/senna/senna3.webp",
    images: [
      "/images/projetos-especiais/senna/senna1.webp",
      "/images/projetos-especiais/senna/senna2.webp",
      "/images/projetos-especiais/senna/senna3.webp",
    ],
    tag: "Projetos especiais",
  },
  {
    id: 18,
    title: "Stranger Things",
    aplication: "Stands",
    image: "/images/projetos-especiais/stranger-things/stranger1.webp",
    images: [
      "/images/projetos-especiais/stranger-things/stranger1.webp",
      "/images/projetos-especiais/stranger-things/stranger2.webp",
      "/images/projetos-especiais/stranger-things/stranger3.webp",
    ],
    tag: "Projetos especiais",
  },
  {
    id: 19,
    title: "Eisenbahn",
    aplication: "Metrôs e trens",
    image: "/images/projetos-especiais/eisenbahn/eisenbahn3.png",
    images: [
      "/images/projetos-especiais/eisenbahn/eisenbahn1.png",
      "/images/projetos-especiais/eisenbahn/eisenbahn2.png",
      "/images/projetos-especiais/eisenbahn/eisenbahn3.png",
    ],
    tag: "Projetos especiais",
  },
];
