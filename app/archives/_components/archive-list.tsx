"use client";

import { Archive } from "@/.contentlayer/generated";
import ArchiveCard from "./archive-card";
import { Separator } from "@/components/ui/separator";

interface ArchiveListProps {
  archiveGroup: {
    year?: number;
    archives: Archive[];
  };
}

export default function ArchiveList({ archiveGroup }: ArchiveListProps) {
  return (
    <div className="flex flex-col w-full gap-4">
      {archiveGroup.year && (
        <div className="flex items-center w-full gap-3">
          <h2 className="font-bold text-xl">{archiveGroup.year}</h2>
          <Separator className="shrink dark:bg-gray-600/20" />
        </div>
      )}
      {archiveGroup.archives.map((archive) => (
        <ArchiveCard key={archive.slug} archive={archive} />
      ))}
    </div>
  );
}
