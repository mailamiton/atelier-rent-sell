'use client';

import { useState } from 'react';
import { Plus, Trash2, Upload, CheckCircle, AlertCircle } from 'lucide-react';

interface ImageEntry {
  id: string;
  source_url: string;
  title: string;
  caption: string;
  tags: string;
  width: string;
  height: string;
}

export default function GalleryImportForm() {
  const [images, setImages] = useState<ImageEntry[]>([
    { id: crypto.randomUUID(), source_url: '', title: '', caption: '', tags: '', width: '', height: '' }
  ]);
  const [adminToken, setAdminToken] = useState('dev-secret');
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addImage = () => {
    setImages([...images, { id: crypto.randomUUID(), source_url: '', title: '', caption: '', tags: '', width: '', height: '' }]);
  };

  const removeImage = (id: string) => {
    if (images.length > 1) {
      setImages(images.filter(img => img.id !== id));
    }
  };

  const updateImage = (id: string, field: keyof ImageEntry, value: string) => {
    setImages(images.map(img => img.id === id ? { ...img, [field]: value } : img));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    const payload = {
      images: images
        .filter(img => img.source_url.trim())
        .map(img => ({
          source_url: img.source_url.trim(),
          title: img.title.trim() || null,
          caption: img.caption.trim() || null,
          tags: img.tags.trim() ? img.tags.split(',').map(t => t.trim()).filter(Boolean) : null,
          width: img.width ? parseInt(img.width) : null,
          height: img.height ? parseInt(img.height) : null,
        }))
    };

    if (payload.images.length === 0) {
      setStatus({ type: 'error', message: 'Please add at least one image URL' });
      setIsSubmitting(false);
      return;
    }

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';
      const response = await fetch(`${apiBaseUrl}/v1/admin/gallery/import`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        setStatus({ 
          type: 'success', 
          message: `Successfully imported ${data.created} image(s), updated ${data.updated} image(s)` 
        });
        setImages([{ id: crypto.randomUUID(), source_url: '', title: '', caption: '', tags: '', width: '', height: '' }]);
      } else {
        const error = await response.text();
        setStatus({ type: 'error', message: `Import failed: ${error}` });
      }
    } catch (error) {
      setStatus({ type: 'error', message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Admin Token */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Admin Token
        </label>
        <input
          type="password"
          value={adminToken}
          onChange={(e) => setAdminToken(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Enter admin token"
          required
        />
      </div>

      {/* Images */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Images to Import</h2>
          <button
            type="button"
            onClick={addImage}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            <Plus className="h-4 w-4" />
            Add Image
          </button>
        </div>

        {images.map((image, index) => (
          <div key={image.id} className="border border-gray-200 rounded-lg p-6 space-y-4 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Image {index + 1}</h3>
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeImage(image.id)}
                  className="text-red-600 hover:text-red-700 p-2"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                value={image.source_url}
                onChange={(e) => updateImage(image.id, 'source_url', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={image.title}
                  onChange={(e) => updateImage(image.id, 'title', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Image title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Caption
                </label>
                <input
                  type="text"
                  value={image.caption}
                  onChange={(e) => updateImage(image.id, 'caption', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Image caption"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                value={image.tags}
                onChange={(e) => updateImage(image.id, 'tags', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="portrait, gallery, modern"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Width (px)
                </label>
                <input
                  type="number"
                  value={image.width}
                  onChange={(e) => updateImage(image.id, 'width', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Height (px)
                </label>
                <input
                  type="number"
                  value={image.height}
                  onChange={(e) => updateImage(image.id, 'height', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="600"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Status Messages */}
      {status.type && (
        <div className={`flex items-center gap-3 p-4 rounded-lg ${
          status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {status.type === 'success' ? (
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
          )}
          <p className="text-sm font-medium">{status.message}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
        >
          <Upload className="h-5 w-5" />
          {isSubmitting ? 'Importing...' : 'Import Images'}
        </button>

        <button
          type="button"
          onClick={() => {
            setImages([{ id: crypto.randomUUID(), source_url: '', title: '', caption: '', tags: '', width: '', height: '' }]);
            setStatus({ type: null, message: '' });
          }}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold"
        >
          Clear All
        </button>
      </div>
    </form>
  );
}
