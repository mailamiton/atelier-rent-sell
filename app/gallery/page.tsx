import GalleryGrid from "../../components/GalleryGrid";

async function fetchGallery(page: number, pageSize: number) {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
  const res = await fetch(`${base}/v1/gallery?page=${page}&page_size=${pageSize}`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to load gallery");
  return res.json();
}

export default async function GalleryPage() {
  const initial = await fetchGallery(1, 24);
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Gallery</h1>
      <GalleryGrid initialData={initial} />
    </div>
  );
}
