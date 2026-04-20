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
}

export const items: AmbienteItem[] = [
  { icon: FiMap, texto: "Metrôs e trens", image: "" },
  { icon: FiNavigation, texto: "Túneis e vias urbanas", image: "" },
  { icon: FiGrid, texto: "Mobiliário urbano", image: "" },
  { icon: FiMonitor, texto: "Outdoors e painéis", image: "" },
  { icon: FiShoppingBag, texto: "Pontos de venda", image: "" },
  { icon: FiCalendar, texto: "Eventos e ativações", image: "" },
  { icon: FiPackage, texto: "Stands e cenografia", image: "" },
];
