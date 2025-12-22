import GalleryGrid from "../../components/GalleryGrid";

export const dynamic = 'force-dynamic';

async function fetchGallery(page: number, pageSize: number) {
  try {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
    const res = await fetch(`${base}/v1/gallery?page=${page}&page_size=${pageSize}`, { 
      cache: 'no-store'
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error('Failed to fetch gallery:', error);
    return null;
  }
}

export default async function GalleryPage() {
  const initial = await fetchGallery(1, 24);
  const fallbackData = initial || { items: [], total: 0, page: 1, page_size: 24, total_pages: 0 };
  
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Gallery</h1>
      {!initial && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800 text-sm">Unable to load gallery. Please ensure the API is running.</p>
        </div>
      )}
      <GalleryGrid initialData={fallbackData} />
    </div>
  );
}
