import { notFound } from "next/navigation";
import { Metadata } from "next";

import { allArchives } from "@/.contentlayer/generated";
import ArchiveHeader from "./_components/archive-header";
import Mdx from "@/components/ui/mdx";

async function getArchiveFromParams(params: { slug: string }) {
  const archive = allArchives.find(
    (archive) => archive.slugAsParams === params.slug,
  );

  if (!archive) return;

  return archive;
}

export async function generateStaticParams() {
  return allArchives.map((archive) => ({
    slug: archive.slugAsParams,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const archive = await getArchiveFromParams(params);

  if (!archive) return {};

  const { title, description } = archive;

  return {
    title,
    description,
    creator: "Warrapat Choedchusakunrat",
    publisher: "Warrapat Choedchusakunrat",
    openGraph: {
      title,
      description
    }
  };
}

export default async function ArchiveSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const archive = await getArchiveFromParams(params);

  if (!archive) notFound();

  return (
    <section className="flex flex-col gap-8">
      <ArchiveHeader archive={archive} />
      <article className="w-full mb-2 prose prose-neutral dark:prose-invert prose-code:before:hidden prose-code:after:hidden">
        <Mdx code={archive.body.code} />
      </article>
    </section>
  );
}
