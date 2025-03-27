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
  const displayName = username || 'User';

  return (
    <div className="min-h-screen bg-primary text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-accent mb-2">{displayName}'s Profile</h2>
          <p className="text-gray-400">See what {displayName} has been up to</p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleUserPosts.map((post) => {
            try {
              return <Post key={post.id} post={post} />;
            } catch (error) {
              console.error('Error rendering post:', error);
              return (
                <div key={post.id} className="bg-red-600 text-white p-4 rounded">
                  Error displaying this post.
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
