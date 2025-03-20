import React from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';

function Profile() {
  const { username } = useParams();
  return (
    <div className="profile">
      <h2>{username}'s Profile</h2>
      <div className="profile-posts">
        {sampleUserPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
