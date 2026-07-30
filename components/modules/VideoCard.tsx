"use client";
import Link from "next/link";
import { useState } from "react";
import { ytEmbed, ytThumb, type Video } from "@/data/videos";

// Lite click-to-play YouTube embed: renders the real thumbnail + brand play button,
// and only mounts the (youtube-nocookie) iframe once the user presses play — so a
// grid of ten videos costs ten images, not ten player bundles.
export function VideoEmbed({
  id, title, autoplayOnMount = false,
}: { id: string; title: string; autoplayOnMount?: boolean }) {
  const [playing, setPlaying] = useState(autoplayOnMount);

  if (playing) {
    return (
      <div className="video-thumb is-playing">
        <iframe
          src={ytEmbed(id)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }
  return (
    <button
      type="button"
      className="video-thumb vt-lite"
      suppressHydrationWarning
      aria-label={`Play video: ${title}`}
      onClick={() => setPlaying(true)}
    >
      {/* hqdefault is 4:3 — the frame crops it to 16:9 via object-fit:cover */}
      <img src={ytThumb(id)} alt="" loading="lazy" decoding="async" />
      <span className="play" aria-hidden="true">▶</span>
    </button>
  );
}

// Full card: player on top, meta below. The title links to the detail page
// (kept separate from the play button for keyboard/screen-reader clarity).
export default function VideoCard({ video }: { video: Video }) {
  return (
    <div className="video-card reveal">
      <VideoEmbed id={video.youtubeId} title={video.title} />
      <div className="vmeta">
        <Link href={`/videos/${video.slug}`} className="vtitle"><b>{video.title}</b></Link>
        <span>{video.cat} · On-demand session</span>
      </div>
    </div>
  );
}
