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
    images: ["/images/projects/Chevrolet-01.webp","/images/projects/intelbras1.webp" ],
  },
  {
    icon: FiNavigation,
    texto: "Túneis e vias urbanas",
    image: "/images/estrada.png",
    images: ["/images/estrada.png", "/images/estrada.png"],
  },
  {
    icon: FiGrid,
    texto: "Mobiliário urbano",
    image: "/images/ponto-de-onibus.png",
    images: ["/images/ponto-de-onibus.png"],
  },
  {
    icon: FiMonitor,
    texto: "Outdoors e painéis",
    image: "/images/outdoor.png",
    images: ["/images/outdoor.png"],
  },
  {
    icon: FiShoppingBag,
    texto: "Pontos de venda",
    image: "/images/pdv.png",
    images: ["/images/pdv.png"],
  },
  {
    icon: FiCalendar,
    texto: "Eventos e ativações",
    image: "/images/evento.png",
    images: ["/images/evento.png"],
  },
  {
    icon: FiPackage,
    texto: "Stands e cenografia",
    image: "/images/stands.png",
    images: ["/images/stands.png"],
  },
];
