import { Project } from "@/components/projects/constants/projects.constants";
import { IconType } from "react-icons";
import {
  FiCalendar,
  FiGrid,
  FiMap,
  FiMonitor,
  FiNavigation,
  FiPackage,
  FiShoppingBag,
} from "react-icons/fi";

export interface AmbienteItem {
  icon: IconType;
  texto: string;
  image: string;
  images?: string[];
}

export const items: AmbienteItem[] = [
  {
    icon: FiMap,
    texto: "Metrôs e trens",
    image: "/images/trem1.png",
    images: [
      "/images/ooh/chevrolet/chevrolet1.webp",
      "/images/ooh/chevrolet/chevrolet2.webp",
      "/images/ooh/chevrolet/chevrolet3.webp",
      "/images/ooh/garnier/garnier1.webp",
      "/images/ooh/garnier/garnier2.webp",
      "/images/ooh/garnier/garnier3.webp",
    ],
  },
  {
    icon: FiNavigation,
    texto: "Túneis e vias urbanas",
    image: "/images/estrada.png",
    images: [
      "/images/ooh/stranger-things/stranger9.webp",
      "/images/ooh/sorriso/sorriso2.webp",
      "/images/ooh/bauducco/bauducco1.webp",
      "/images/ooh/intelbras/intelbras1.webp",
      "/images/ooh/cielo/cielo1.webp",
      "/images/projetos-especiais/99food/991.webp",
    ],
  },
  {
    icon: FiGrid,
    texto: "Mobiliário urbano",
    image: "/images/ponto-de-onibus.png",
    images: [
      "/images/ooh/avon/avon1.webp",
      "/images/ooh/avon/avon2.webp",
      "/images/ooh/avon/avon3.webp",
    ],
  },
  {
    icon: FiMonitor,
    texto: "Outdoors e painéis",
    image: "/images/outdoor.png",
    images: [
      "/images/ooh/avon/avon2.webp",
      "/images/ooh/shopee/shopee1.jpg",
      "/images/ooh/shopee/shopee2.jpg",
      "/images/ooh/natura/natura1.png",
    ],
  },
  {
    icon: FiShoppingBag,
    texto: "Pontos de venda",
    image: "/images/pdv.png",
    images: [
      "/images/pdv/disney/disney2.jpg",
      "/images/pdv/princesas/princesas1.jpg",
      "/images/pdv/princesas/princesas2.jpg",
      "/images/pdv/herois/heroi1.jpg",
      "/images/pdv/mickey/mickey1.jpg",
    ],
  },
  {
    icon: FiCalendar,
    texto: "Eventos e ativações",
    image: "/images/evento.png",
    images: [
      "/images/projetos-especiais/lacta/lacta1.webp",
      "/images/projetos-especiais/lacta/lacta2.webp",
      "/images/projetos-especiais/lacta/lacta3.webp",
      "/images/projetos-especiais/tartarugas-ninja/tartaruga1.jpg",
      "/images/projetos-especiais/tartarugas-ninja/tartaruga2.jpg",
      "/images/projetos-especiais/tartarugas-ninja/tartaruga3.jpg",
      "/images/projetos-especiais/tartarugas-ninja/tartaruga4.jpg",
    ],
  },
  {
    icon: FiPackage,
    texto: "Stands e cenografia",
    image: "/images/stands.png",
    images: [
      "/images/projetos-especiais/stranger-things/stranger1.webp",
      "/images/projetos-especiais/stranger-things/stranger2.webp",
      "/images/projetos-especiais/stranger-things/stranger3.webp",
      "/images/pdv/mickey/mickey1.jpg",
      "/images/pdv/mickey/mickey2.jpg",
      "/images/pdv/mickey/mickey3.jpg",
    ],
  },
];
