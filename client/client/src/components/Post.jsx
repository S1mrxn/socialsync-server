import React from 'react';

export default function Post({ post }) {
  return (
    <div className="bg-[#0f172a] border border-gray-700 rounded-xl overflow-hidden shadow-md text-white">
      {/* Post Header */}
      <div className="flex items-center px-4 py-3 border-b border-gray-700">
        {post.author.profilePic && (
          <img
            src={post.author.profilePic}
            alt={post.author.username}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
        )}
        <span className="font-semibold text-sm">{post.author.username}</span>
      </div>

      {/* Post Image */}
      <img
        src={post.imageUrl}
        alt={post.caption}
        className="w-full max-h-[500px] object-cover"
      />

      {/* Post Info */}
      <div className="px-4 py-3">
        <p className="text-sm mb-1">{post.caption}</p>
        <p className="text-xs text-gray-400">{post.likes.length} likes</p>
      </div>
    </div>
  );
}
