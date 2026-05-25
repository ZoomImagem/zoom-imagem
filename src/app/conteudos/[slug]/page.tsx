import { notFound } from "next/navigation";
import "../../../styles/global.scss";
import { conteudos } from "@/lib/conteudos/conteudos";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return conteudos.map((s) => ({ slug: s.slug }));
}

export default async function Conteudos({ params }: Props) {
  const { slug } = await params;

  const conteudo = conteudos.find((s) => s.slug === slug);

  if (!conteudo) notFound();

  const Pagina = conteudo!.component;

  return <Pagina />;
}
