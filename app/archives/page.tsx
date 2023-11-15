import { allArchives } from "@/.contentlayer/generated";
import { getArchiveGroups } from "./util";
import ArchiveList from "./_components/archive-list";

export default function ArchivesPage() {
  return (
    <div className="flex flex-col items-start gap-10 w-full">
      {getArchiveGroups(allArchives).map((group) => (
        <ArchiveList key={group.year} archiveGroup={group} />
      ))}
    </div>
  )
}