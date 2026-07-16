"use client";
import { useMemo, useState } from "react";
import VideoCard from "@/components/modules/VideoCard";
import { videos } from "@/data/videos";

// Filterable library: category chips + the full embedded grid.
export default function VideoLibrary() {
  const [cat, setCat] = useState<string>("All");

  const cats = useMemo(() => {
    const counts = new Map<string, number>();
    for (const v of videos) counts.set(v.cat, (counts.get(v.cat) ?? 0) + 1);
    return [["All", videos.length] as const, ...[...counts.entries()]];
  }, []);

  const shown = cat === "All" ? videos : videos.filter((v) => v.cat === cat);

  return (
    <>
      <div className="vfilter" role="group" aria-label="Filter videos by topic">
        {cats.map(([c, n]) => (
          <button
            key={c}
            type="button"
            className={c === cat ? "on" : ""}
            aria-pressed={c === cat}
            onClick={() => setCat(c)}
          >
            {c}
            <span className="cnt">{n}</span>
          </button>
        ))}
      </div>
      <div className="grid g3" role="list" aria-label={`${shown.length} videos`}>
        {shown.map((v) => (
          <div role="listitem" key={v.slug}>
            <VideoCard video={v} />
          </div>
        ))}
      </div>
    </>
  );
}
