import Link from "next/link";
import { Archive } from "@/.contentlayer/generated";

interface ArchiveHeaderProps {
  archive: Archive;
}

export default function ArchiveHeader({ archive }: ArchiveHeaderProps) {
  return (
    <>
      <Link
        href={`/archives`}
        className="group w-fit h-auto flex items-center gap-2 hocus:underline hocus:underline-offset-2 hocus:decoration-2 hocus:decoration-neutral-400 dark:text-neutral-400 text-sm"
      >
        <span className="font-semibold">{"<-"} Back</span>
      </Link>
      <div>
        <h1 className="text-2xl font-semibold text-purple-200">
          {archive.title}
        </h1>
        <p className="mt-2 text-sm text-neutral-400">{archive.description}</p>
        <p className="text-xs dark:text-neutral-400 mt-4">
          Published on{" "}
          {new Date(archive.publishedAt).toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}{" "}
          • {archive.readingTime.text}
        </p>
      </div>
    </>
  );
}
