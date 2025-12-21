import GalleryImportForm from './GalleryImportForm';

export default function AdminGalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Gallery Admin</h1>
            <p className="text-gray-600">Import images to the gallery</p>
          </div>
          
          <GalleryImportForm />
        </div>
      </div>
    </div>
  );
}
