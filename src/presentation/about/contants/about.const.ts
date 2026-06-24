import { FiShield, FiTrash2, FiPackage, FiTrendingUp } from "react-icons/fi";

export const ecoFeatures = [
  {
    icon: FiShield, // ou outro ícone que represente responsabilidade
    title: "Responsabilidade na execução",
    description:
      "Acreditamos que grandes operações também devem ser conduzidas com responsabilidade. Por isso, buscamos continuamente adotar práticas mais conscientes em nossos processos, equilibrando eficiência operacional, qualidade e cuidado com o impacto gerado pelas nossas atividades.",
  },
  {
    icon: FiTrash2,
    title: "Descarte responsável",
    description:
      "Após a conclusão dos projetos, os materiais são destinados de forma adequada, respeitando processos de descarte e encaminhamento compatíveis com cada tipo de resíduo. Nosso compromisso é reduzir desperdícios e incentivar práticas mais responsáveis ao longo da operação.",
  },
  {
    icon: FiPackage,
    title: "Uso consciente de materiais",
    description:
      "Sempre que possível, avaliamos alternativas que contribuam para a otimização de recursos, redução de perdas e melhor aproveitamento dos insumos utilizados na produção.",
  },
  {
    icon: FiTrendingUp,
    title: "Evolução contínua",
    description:
      "Entendemos que sustentabilidade é uma jornada de aprimoramento constante. Por isso, seguimos atentos a novas soluções, materiais e práticas que possam contribuir para operações cada vez mais eficientes e responsáveis.",
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
