import React from 'react';
import Post from '../components/Post';
import UploadPost from '../components/UploadPost';

function Feed() {
  const [posts, setPosts] = React.useState(samplePosts);

  const handleUpload = (newPostData) => {
    const newPost = {
      id: posts.length + 1,
      imageUrl: newPostData.preview,
      caption: newPostData.caption,
      author: { username: 'currentuser', profilePic: '' },
      likes: []
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="feed">
      <UploadPost onUpload={handleUpload} />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
