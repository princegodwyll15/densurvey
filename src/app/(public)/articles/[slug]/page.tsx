import { DetailRoute } from "@/components/site/route-pages";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DetailRoute type="articles" slug={slug} />;
}
