// lib/solucoes/solucoes.ts

import { OohTag, PdvTag } from "@/presentation/solutions/fragments";
import { ProjectsComponent } from "@/presentation/solutions/fragments/projects";
import { ComponentType } from "react";

type Solucao = {
  label: string;
  slug: string;
  component: ComponentType;
};

export const solucoes: Solucao[] = [
  { label: "Out of home - OOH", slug: "out-of-home", component: OohTag },
  {
    label: "Pontos de venda - PDV",
    slug: "ponto-de-venda",
    component: PdvTag,
  },
  {
    label: "Projetos especiais",
    slug: "projetos-especiais",
    component: ProjectsComponent,
  },
  // { label: "Linha ECO", slug: "linha-eco", component: EcoTag },
];
