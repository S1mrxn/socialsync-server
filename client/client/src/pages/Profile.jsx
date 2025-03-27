import React from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';

const sampleUserPosts = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/300',
    caption: 'Sample post 1',
    user: { username: 'john' }
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/300',
    caption: 'Sample post 2',
    user: { username: 'john' }
  }
];

export default function Profile() {
  const { username } = useParams();

  return (
    <div className="min-h-screen bg-primary text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-accent">{username}'s Profile</h2>
          <p className="text-gray-400">See what {username} has been up to</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sampleUserPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
