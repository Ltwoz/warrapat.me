"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ArchiveBannerProps {
  className?: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  [x: string | number | symbol]: unknown;
}

export default function ArchiveBanner({
  className,
  src,
  width,
  height,
  alt,
  ...props
}: ArchiveBannerProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn(className, "relative flex overflow-hidden")}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        quality={95}
        onLoadingComplete={() => setIsLoading(false)}
        className={cn("duration-700 m-0 h-full w-full object-cover rounded overflow-hidden", isLoading && "blur-2xl")}
        {...props}
      />
    </div>
  );
}
