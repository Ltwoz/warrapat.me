import { Archive } from "@/.contentlayer/generated";

export const getArchiveGroups = (archives: Archive[]) => {
  const sortedArchives = archives.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
  );

  const groupedArchives = sortedArchives.reduce(
    (prev, curr) => {
      const group =
        new Date(curr.publishedAt).getFullYear() || new Date().getFullYear();

      if (!prev[group]) prev[group] = [];

      prev[group].push(curr);

      return prev;
    },
    {} as Record<string, Archive[]>,
  );

  const archiveGroups = Object.keys(groupedArchives)
    .map((year) => ({
      year: +year,
      archives: groupedArchives[+year],
    }))
    .sort((a, b) => Number(b.year) - Number(a.year));

  return archiveGroups;
};