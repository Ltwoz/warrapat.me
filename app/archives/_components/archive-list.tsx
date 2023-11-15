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
    <div className="flex flex-col w-full gap-2">
      {archiveGroup.year && (
        <div className="flex items-center w-full gap-3 py-4 z-50 sticky top-0 bg-background/90 backdrop-blur-sm">
          <h2 className="font-bold text-xl">{archiveGroup.year}</h2>
          <Separator className="shrink" />
        </div>
      )}
      <div className="flex flex-col w-full gap-4">
        {archiveGroup.archives.map((archive) => (
          <ArchiveCard key={archive.slug} archive={archive} />
        ))}
      </div>
    </div>
  );
}
