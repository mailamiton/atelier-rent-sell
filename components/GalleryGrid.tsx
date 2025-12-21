"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import GalleryCard from "./GalleryCard";
import Lightbox from "./Lightbox";

type ImageItem = {
  id: string;
  title?: string | null;
  caption?: string | null;
  url: string;
  width?: number | null;
  height?: number | null;
  tags?: string[] | null;
};

type PagePayload = {
  items: ImageItem[];
  page: number;
  page_size: number;
  total: number;
};

type PrevNext = { dir: "next" | "prev" };

export default function GalleryGrid({ initialData }: { initialData: PagePayload }) {
  const [items, setItems] = useState<ImageItem[]>(initialData.items);
  const [page, setPage] = useState<number>(initialData.page);
  const [pageSize] = useState<number>(initialData.page_size);
  const [total, setTotal] = useState<number>(initialData.total);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState<ImageItem | null>(null);

  const canLoadMore = items.length < total;

  const fetchMore = useCallback(async () => {
    if (loading || !canLoadMore) return;
    setLoading(true);
    setError(null);
    try {
      const base = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
      const nextPage = page + 1;
      const res = await fetch(`${base}/v1/gallery?page=${nextPage}&page_size=${pageSize}`);
      if (!res.ok) throw new Error("Failed to load more");
      const data: PagePayload = await res.json();
      setItems((prev) => [...prev, ...data.items]);
      setPage(data.page);
      setTotal(data.total);
    } catch (e: any) {
      setError(e.message || "Error");
    } finally {
      setLoading(false);
    }
  }, [page, pageSize, canLoadMore, loading]);

  return (
    <div>
      {error && (
        <div className="mb-4 rounded border border-red-300 bg-red-50 p-3 text-sm text-red-700">{error}</div>
      )}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {items.map((it) => (
          <button
            key={it.id}
            onClick={() => setActive(it)}
            className="group relative aspect-square overflow-hidden rounded border bg-white"
            aria-label={it.title || "View image"}
          >
            <GalleryCard item={it} />
          </button>
        ))}
      </div>
      {canLoadMore && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={fetchMore}
            disabled={loading}
            className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        </div>
      )}

      {active && (
        <Lightbox image={active} onClose={() => setActive(null)} onPrevNext={({ dir }: PrevNext) => {
          const idx = items.findIndex((x) => x.id === active.id);
          let nextIdx = dir === "next" ? idx + 1 : idx - 1;
          if (nextIdx < 0) nextIdx = items.length - 1;
          if (nextIdx >= items.length) nextIdx = 0;
          setActive(items[nextIdx]);
        }} />
      )}
    </div>
  );
}
