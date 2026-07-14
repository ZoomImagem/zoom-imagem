import { FiShield, FiTrash2, FiPackage, FiTrendingUp } from "react-icons/fi";

export const ecoFeatures = [
  {
    icon: FiShield, // ou outro ícone que represente responsabilidade
    title: "Responsabilidade na execução",
    description:
      "Acreditamos que grandes operações também devem ser conduzidas com responsabilidade. Por isso, buscamos constantemente aprimorar nossos processos para unir qualidade, eficiência e consciência ambiental.",
  },
  {
    icon: FiTrash2,
    title: "Descarte responsável",
    description:
      "Após cada projeto, realizamos o descarte adequado dos materiais, seguindo práticas responsáveis para reduzir impactos e desperdícios.",
  },
  {
    icon: FiPackage,
    title: "Uso consciente de materiais",
    description:
      "Após cada projeto, realizamos o descarte adequado dos materiais, seguindo práticas responsáveis para reduzir impactos e desperdícios.",
  },
  {
    icon: FiTrendingUp,
    title: "Evolução contínua",
    description:
      "Seguimos em constante evolução, buscando novas práticas e materiais que tornem nossa operação cada vez mais responsável.",
  },
];

export const homologacoes = {
  metro: [
    { label: "Metrô São Paulo", sublabel: "Todas as linhas" },
    { label: "Trem SP – CPTM", sublabel: "Todas as linhas" },
    { label: "Metrô Salvador BA", sublabel: "Todas as linhas" },
  ],
  aeroportos: [
    { label: "Aeroporto Internacional de Guarulhos", sublabel: "SP" },
    { label: "Aeroporto de Congonhas", sublabel: "SP" },
    { label: "Aeroporto Internacional de Viracopos", sublabel: "SP" },
    { label: "Aeroporto Internacional de Santos Dumont", sublabel: "RJ" },
  ],
};
