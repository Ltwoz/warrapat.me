import { notFound } from "next/navigation";
import { Metadata } from "next";

import { allArchives } from "@/.contentlayer/generated";
import ArchiveHeader from "./_components/archive-header";
import Mdx from "@/components/ui/mdx";
import { getUrl } from "@/lib/utils";
import ArchiveBanner from "./_components/archive-banner";

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

  const { title, description, slug, cover } = archive;
  const ogImage = cover ? `${getUrl()}/${cover}` : "";

  return {
    title,
    description,
    creator: "Warrapat Choedchusakunrat",
    publisher: "Warrapat Choedchusakunrat",
    openGraph: {
      title,
      description,
      type: "article",
      url: `${getUrl()}/archives/${slug}`,
      images: [
        {
          url: ogImage,
          alt: title,
          width: "1200",
          height: "630",
        },
      ],
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
      },
    },
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
      {archive.cover && (
        <ArchiveBanner
          src={archive.cover}
          alt={archive.title}
          decoding="async"
          width={100}
          height={100}
          priority
        />
      )}
      <article className="w-full mb-2 prose prose-neutral dark:prose-invert prose-code:before:hidden prose-code:after:hidden">
        <Mdx code={archive.body.code} />
      </article>
    </section>
  );
}
