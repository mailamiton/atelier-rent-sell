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

export default function GalleryCard({ item }: { item: ImageItem }) {
  const alt = item.title || item.caption || "Artwork";
  return (
    <div className="h-full w-full relative">
      <Image
        src={item.url}
        alt={alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        className="object-cover transition-transform duration-200 group-hover:scale-105"
        priority={false}
        unoptimized
      />
    </div>
  );
}
