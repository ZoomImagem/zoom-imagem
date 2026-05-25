import { notFound } from "next/navigation";
import { articles } from "@/presentation/contents/fragments/blog/fragments/post/constants/posts";
import { PostTemplate } from "@/presentation/contents/fragments/blog/fragments/post";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  return <PostTemplate article={article!} />;
}
