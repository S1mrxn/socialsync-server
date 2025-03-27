import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import UploadPost from '../components/UploadPost';
import Post from '../components/Post';

const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      id
      imageUrl
      caption
      createdAt
      user { username profilePicture }
      likes { id }
      comments { id user { username } text }
    }
  }
`;

export default function Feed() {
  const { data, loading, error } = useQuery(GET_POSTS);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const posts = data?.getPosts || [];

  return (
    <div className="bg-primary min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -left-16 top-1/4 w-32 h-32 rounded-full bg-accent/5"></div>
        <div className="absolute -right-8 top-1/3 w-24 h-24 rounded-full bg-accent/5"></div>
        <div className="absolute left-8 top-2/3 w-16 h-16 rounded-full bg-accent/5"></div>
        <div className="absolute -right-16 top-3/4 w-40 h-40 rounded-full bg-accent/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,255,241,0.02)_0%,rgba(10,17,35,0)_100%)]"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 bg-primary border-b border-accent/20 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-[Pacifico] text-accent">SocialSync</a>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-64 bg-secondary rounded-full text-sm focus:ring-2 focus:ring-primary/20"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <i className="ri-search-line text-gray-500"></i>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowNotifications(prev => !prev)}
              className="relative p-2 hover:bg-secondary rounded-full"
            >
              <i className="ri-notification-3-line text-button text-xl"></i>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              onClick={() => setShowSettings(prev => !prev)}
              className="p-2 hover:bg-secondary rounded-full"
            >
              <i className="ri-settings-3-line text-button text-xl"></i>
            </button>
            <div
              className="w-10 h-10 rounded-full bg-cover cursor-pointer"
              style={{ backgroundImage: "url('https://public.readdy.ai/ai/img_res/e23c46812d059cced80663456a435dda.jpg')" }}
            />
          </div>
        </div>
      </nav>

      <footer className="fixed bottom-0 left-0 right-0 bg-primary border-t border-accent/20">
        <div className="max-w-2xl mx-auto px-4 py-2 flex justify-between">
          <button className="flex flex-col items-center gap-1 p-2 text-button">
            <i className="ri-home-5-line text-2xl"></i>
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-[#8fd1bf]">
            <i className="ri-search-line text-2xl"></i>
            <span className="text-xs">Search</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-[#8fd1bf]">
            <i className="ri-add-line text-2xl"></i>
            <span className="text-xs">Post</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-[#8fd1bf]">
            <i className="ri-user-line text-2xl"></i>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </footer>

      <main className="max-w-2xl mx-auto pt-24 pb-24 px-4 text-primary">
        <UploadPost />
        {loading && <p className="text-white text-center">Loading posts…</p>}
        {error && <p className="text-red-500 text-center">{error.message}</p>}
        <div className="space-y-6">
          {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
      </main>

      {showNotifications && (
        <aside className="fixed top-16 right-4 w-80 bg-white rounded-lg shadow-lg p-4 border">
          <h3 className="font-semibold mb-4">Notifications</h3>
          <p className="text-gray-500">No new notifications</p>
        </aside>
      )}

      {showSettings && (
        <aside className="fixed top-16 right-4 w-64 bg-white rounded-lg shadow-lg p-4 border">
          <button className="w-full text-left mb-2">Profile</button>
          <button className="w-full text-left">Settings</button>
          <hr className="my-2" />
          <button className="w-full text-left text-red-500">Logout</button>
        </aside>
      )}
    </div>
  );
}
