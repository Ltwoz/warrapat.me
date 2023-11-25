import { allArchives } from "@/.contentlayer/generated";

import { getArchiveGroups } from "./util";
import ArchiveList from "./_components/archive-list";

export default function ArchivesPage() {
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <div className="mb-2">
        <h1 className="font-bold text-2xl">Archives</h1>
        <p className="dark:text-neutral-400">Some of the random things i&apos;ve wrote.</p>
      </div>
      {getArchiveGroups(allArchives).map((group) => (
        <ArchiveList key={group.year} archiveGroup={group} />
      ))}
    </div>
  );
}
