import React, { useState } from 'react';

function UploadPost({ onUpload }) {
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
    if (file && caption) {
      onUpload({ file, caption, preview });
      setFile(null);
      setCaption('');
      setPreview('');
    } else {
      alert('Please select an image and add a caption.');
    }
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" className="preview" />}
      <input
        type="text"
        placeholder="Enter a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadPost;
