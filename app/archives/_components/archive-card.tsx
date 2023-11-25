"use client";

import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

import { Archive } from "@/.contentlayer/generated";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ArchiveCardProps {
  archive: Archive;
}

const ColorStyles: Record<string, Record<string, string>> = {
  purple: {
    bg: "hocus:bg-purple-100 hocus:dark:bg-purple-600",
    title: "group-hocus:text-purple-500 group-hocus:dark:text-purple-500",
  },
  orange: {
    bg: "hocus:bg-orange-100 hocus:dark:bg-orange-600",
    title: "group-hocus:text-orange-500 group-hocus:dark:text-orange-500",
  },
  cyan: {
    bg: "hocus:bg-cyan-100 hocus:dark:bg-cyan-600",
    title: "group-hocus:text-cyan-500 group-hocus:dark:text-cyan-500",
  },
  blue: {
    bg: "hocus:bg-blue-100 hocus:dark:bg-blue-600",
    title: "group-hocus:text-blue-500 group-hocus:dark:text-blue-500",
  },
  pink: {
    bg: "hocus:bg-pink-100 hocus:dark:bg-pink-600",
    title: "group-hocus:text-pink-500 group-hocus:dark:text-pink-500",
  },
  red: {
    bg: "hocus:bg-red-100 hocus:dark:bg-red-600",
    title: "group-hocus:text-red-500 group-hocus:dark:text-red-500",
  },
  indigo: {
    bg: "hocus:bg-indigo-100 hocus:dark:bg-indigo-600",
    title: "group-hocus:text-indigo-500 group-hocus:dark:text-indigo-500",
  },
};

export default function ArchiveCard({ archive }: ArchiveCardProps) {
  return (
    <Link
      href={`${archive.slug}`}
      id={archive.slug}
      className={cn(
        "cursor-pointer h-fit",
        "flex flex-col gap-2 w-full items-start",
        "group p-3 transition-all duration-200 rounded-lg",
        "transform hover:-translate-y-1",
        "hocus:bg-opacity-50 hocus:dark:bg-opacity-[0.1]",
        ColorStyles[archive.color]?.bg,
      )}
    >
      <div className="flex flex-col items-start w-full gap-3">
        <h3
          className={cn(
            "font-bold transition-all group-hocus:underline decoration-2 underline-offset-2",
            ColorStyles[archive.color]?.title,
          )}
        >
          {archive.title}
        </h3>
        <p className="font-semibold text-sm dark:text-neutral-300">{archive.description}</p>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="gap-1">
            <Calendar className="h-3 w-3" />
            <span className="font-semibold">
              {new Date(archive.publishedAt).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
              })}
            </span>
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            <span className="font-semibold">{archive.readingTime.text}</span>
          </Badge>
        </div>
      </div>
    </Link>
  );
}
