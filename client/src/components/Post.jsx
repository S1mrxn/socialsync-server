import React from 'react';

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-header">
        {post.author.profilePic && (
          <img
            src={post.author.profilePic}
            alt={post.author.username}
            className="avatar"
          />
        )}
        <span className="username">{post.author.username}</span>
      </div>
      <img src={post.imageUrl} alt={post.caption} className="post-image" />
      <div className="post-info">
        <p className="caption">{post.caption}</p>
        <p className="likes">{post.likes.length} likes</p>
      </div>
    </div>
  );
}

export default Post;


