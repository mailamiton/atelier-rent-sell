"use client";

import { useEffect } from "react";
import Image from "next/image";

type ImageItem = {
  id: string;
  title?: string | null;
  caption?: string | null;
  url: string;
  width?: number | null;
  height?: number | null;
  tags?: string[] | null;
};

export default function Lightbox({
  image,
  onClose,
  onPrevNext,
}: {
  image: ImageItem;
  onClose: () => void;
  onPrevNext: (args: { dir: "next" | "prev" }) => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onPrevNext({ dir: "next" });
      if (e.key === "ArrowLeft") onPrevNext({ dir: "prev" });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrevNext]);

  const alt = image.title || image.caption || "Artwork";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div className="relative max-h-[90vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded bg-white/80 px-2 py-1 text-sm"
          aria-label="Close"
        >
          Close
        </button>
        <button
          onClick={() => onPrevNext({ dir: "prev" })}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded bg-white/80 px-2 py-1 text-sm"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={() => onPrevNext({ dir: "next" })}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded bg-white/80 px-2 py-1 text-sm"
          aria-label="Next"
        >
          ›
        </button>
        <div className="relative mx-auto aspect-[4/3] w-full">
          <Image
            src={image.url}
            alt={alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
        {(image.title || image.caption) && (
          <div className="mt-3 text-center text-white">
            {image.title && <div className="text-lg font-medium">{image.title}</div>}
            {image.caption && <div className="text-sm opacity-80">{image.caption}</div>}
          </div>
        )}
      </div>
    </div>
  );
}
