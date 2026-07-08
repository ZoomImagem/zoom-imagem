import { FiClipboard, FiEye, FiPlay, FiSettings } from "react-icons/fi";
import { Gauge, Layers, ShieldCheck, Target } from "lucide-react";
import { IconType } from "react-icons";

interface Stage {
  id: string;
  phase?: string;
  icon: IconType;
  label: string;
  tools: string[];
  color: "bubleColor";
}

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

export const stages: Stage[] = [
  {
    id: "plan",
    phase: "Planejamento",
    icon: FiClipboard,
    label: "Planejamento técnico",
    tools: ["Cada projeto é pensado para funcionar na prática"],
    color: "bubleColor",
  },
  {
    id: "prod",
    phase: "Produção",
    icon: FiSettings,
    label: "Produção própria",
    tools: ["Controle total sobre qualidade, prazo e execução"],
    color: "bubleColor",
  },

  {
    id: "exec",
    phase: "Execução",
    icon: FiPlay,
    label: "Execução em campo",
    tools: ["Equipe preparada para implementar com padrão"],
    color: "bubleColor",
  },
  {
    id: "acc",
    phase: "Acompanhamento",
    icon: FiEye,
    label: "Acompanhamento",
    tools: ["Monitoramento para garantir qualidade"],
    color: "bubleColor",
  },
];

export const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Execução real",
    description: "Não dependemos de terceiros.",
  },
  {
    icon: Layers,
    title: "Consistência",
    description: "Entrega padronizada.",
  },
  {
    icon: Gauge,
    title: "Agilidade com controle ",
    description: "Velocidade com qualidade.",
  },
  {
    icon: Target,
    title: "Visão prática ",
    description: "Projetos pensados para funcionar.",
  },
];

export const clientsMobile = [
  {
    name: "byd",
    src: "/images/client-logo/byd-branco.webp",
  },
  {
    name: "99",
    src: "/images/client-logo/99-white.png",
  },
  {
    name: "aws",
    src: "/images/client-logo/aws-branco.png",
  },
  {
    name: "heineken",
    src: "/images/client-logo/heineken-branco.png",
  },
  {
    name: "itau",
    src: "/images/client-logo/itau-branco.png",
  },
  {
    name: "santander",
    src: "/images/client-logo/santander-branco.png",
  },
  {
    name: "netflix",
    src: "/images/client-logo/netflix-branco.png",
  },
  {
    name: "vivo",
    src: "/images/client-logo/vivo-branco.png",
  },
  {
    name: "bk",
    src: "/images/client-logo/bk-branco.png",
  },
  {
    name: "ambev",
    src: "/images/client-logo/ambev.png",
  },
];
