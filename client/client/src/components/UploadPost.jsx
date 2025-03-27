import React, { useState } from 'react';

export default function UploadPost({ onUpload }) {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [preview, setPreview] = useState('');

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file && caption.trim()) {
      onUpload({ file, caption, preview });
      setFile(null);
      setCaption('');
      setPreview('');
    } else {
      alert('Please select an image and add a caption.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0f172a] text-white border border-gray-700 rounded-xl p-6 mb-6 shadow"
    >
      <h3 className="text-lg font-semibold mb-4">Create a Post</h3>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded file:bg-secondary file:text-white hover:file:bg-secondary/90 mb-4"
      />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-full max-h-80 object-cover rounded-lg mb-4 border border-gray-700"
        />
      )}

      <input
        type="text"
        placeholder="Enter a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="w-full px-4 py-2 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary"
      />

      <button
        type="submit"
        className="w-full py-2 bg-secondary text-white font-medium rounded hover:bg-secondary/90 transition"
      >
        Upload
      </button>
    </form>
  );
}
