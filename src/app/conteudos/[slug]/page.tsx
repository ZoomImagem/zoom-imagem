import { notFound } from "next/navigation";
import "../../../styles/global.scss";
import { conteudos } from "@/lib/conteudos/conteudos";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return conteudos.map((s) => ({ slug: s.slug }));
}

export default async function Solutions({ params }: Props) {
  const { slug } = await params;

  const solucao = conteudos.find((s) => s.slug === slug);

  if (!solucao) notFound();

  const Pagina = solucao!.component;

  return <Pagina />;
}
