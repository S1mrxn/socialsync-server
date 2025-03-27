import React, { useState } from 'react';
import Post from '../components/Post';
import UploadPost from '../components/UploadPost';

const samplePosts = [
  {
    id: 1,
    user: {
      name: 'Sarah Anderson',
      avatar: 'https://public.readdy.ai/ai/img_res/8841545e14eecffd021c7578f4619793.jpg',
      isFollowing: false,
    },
    content:
      'Just finished an amazing photoshoot in downtown! The city lights create such a magical atmosphere. What do you think about this shot?',
    image: 'https://public.readdy.ai/ai/img_res/cc387f4ed4acfa983a7697dfe25f4398.jpg',
    timestamp: '35 minutes ago',
    likes: 234,
    comments: [
      {
        user: 'David Miller',
        avatar:
          'https://public.readdy.ai/ai/img_res/53367bd5604f70f1d58bdc3861f9065a.jpg',
        content: 'Absolutely stunning! The composition is perfect.',
        timestamp: '25 minutes ago',
      },
    ],
  },
  {
    id: 2,
    user: {
      name: 'James Wilson',
      avatar: 'https://public.readdy.ai/ai/img_res/72c3b7a0201b54711da0acf9c8ff6213.jpg',
      isFollowing: true,
    },
    content:
      'Morning coffee and coding session. Starting the day right! ☕️💻',
    image: 'https://public.readdy.ai/ai/img_res/df36fbde251d9379039aad75af142a09.jpg',
    timestamp: '2 hours ago',
    likes: 156,
    comments: [
      {
        user: 'Emily Parker',
        avatar:
          'https://public.readdy.ai/ai/img_res/8a7c4080523e2811779d771210ce0dda.jpg',
        content: 'Love your setup! What keyboard is that?',
        timestamp: '1 hour ago',
      },
    ],
  },
];

function Feed() {
  const [posts, setPosts] = useState(samplePosts);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleUpload = (newPostData) => {
    const newPost = {
      id: posts.length + 1,
      image: newPostData.preview,
      content: newPostData.caption,
      user: { name: 'currentuser', avatar: '', isFollowing: false },
      likes: 0,
      comments: [],
      timestamp: 'Just now',
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="bg-primary min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -left-16 top-1/4 w-32 h-32 rounded-full bg-accent/5"></div>
        <div className="absolute -right-8 top-1/3 w-24 h-24 rounded-full bg-accent/5"></div>
        <div className="absolute left-8 top-2/3 w-16 h-16 rounded-full bg-accent/5"></div>
        <div className="absolute -right-16 top-3/4 w-40 h-40 rounded-full bg-accent/5"></div>
        <svg
          className="absolute left-24 top-1/2 w-64 h-64 text-accent/5"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
        <svg
          className="absolute right-32 top-1/4 w-48 h-48 text-accent/5"
          viewBox="0 0 100 100"
        >
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <rect
            x="30"
            y="30"
            width="40"
            height="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <rect
            x="40"
            y="40"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,255,241,0.02)_0%,rgba(10,17,35,0)_100%)]"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 bg-primary border-b border-accent/20 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-2xl font-['Pacifico'] text-accent">
              SocialSync
            </a>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 w-64 bg-secondary rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-500">
                <i className="ri-search-line"></i>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button
              id="notificationBtn"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowSettings(false);
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary relative"
            >
              <i className="ri-notification-3-line text-xl text-button"></i>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              id="settingsBtn"
              onClick={() => {
                setShowSettings(!showSettings);
                setShowNotifications(false);
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary"
            >
              <i className="ri-settings-3-line text-xl text-button"></i>
            </button>
            <div
              className="w-10 h-10 rounded-full bg-cover cursor-pointer"
              style={{
                backgroundImage:
                  "url('https://public.readdy.ai/ai/img_res/e23c46812d059cced80663456a435dda.jpg')",
              }}
            ></div>
          </div>
        </div>
      </nav>

      <div className="fixed bottom-0 left-0 right-0 bg-primary border-t border-accent/20">
        <div className="max-w-2xl mx-auto px-4 py-2 flex items-center justify-between">
          <button className="flex flex-col items-center gap-1 p-2 text-button">
            <i className="ri-home-5-line text-2xl"></i>
            <span className="text-xs">Home</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 p-2 text-[#8fd1bf]"
            onClick={() => {
              /* Add navigation for search */
            }}
          >
            <i className="ri-search-line text-2xl"></i>
            <span className="text-xs">Search</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 p-2 text-[#8fd1bf]"
            onClick={() => {
              /* Add navigation for post */
            }}
          >
            <i className="ri-add-line text-2xl"></i>
            <span className="text-xs">Post</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 p-2 text-[#8fd1bf]"
            onClick={() => {
              /* Add navigation for profile */
            }}
          >
            <i className="ri-user-line text-2xl"></i>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>

      <main className="max-w-2xl mx-auto pt-24 pb-24 px-4 text-primary">
        <UploadPost onUpload={handleUpload} />
        <div className="space-y-6">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>

      {showNotifications && (
        <div className="fixed top-16 right-4 w-80 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
          <h3 className="font-semibold mb-4">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full bg-cover"
                style={{
                  backgroundImage:
                    "url('https://public.readdy.ai/ai/img_res/9665fd15bab3f1cd10547d9b9d558dfd.jpg')",
                }}
              ></div>
              <div>
                <p className="text-sm">
                  <span className="font-semibold">Emma Thompson</span> liked your post
                </p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full bg-cover"
                style={{
                  backgroundImage:
                    "url('https://public.readdy.ai/ai/img_res/68ece3a8a2c80b5ed42e486f52ae45ea.jpg')",
                }}
              ></div>
              <div>
                <p className="text-sm">
                  <span className="font-semibold">Michael Chen</span> started following you
                </p>
                <p className="text-xs text-gray-500">15 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="fixed top-16 right-4 w-64 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
          <div className="space-y-2">
            <button
              onClick={() => {
                /* Navigate to profile */
              }}
              className="w-full text-left px-4 py-2 rounded hover:bg-secondary flex items-center gap-3"
            >
              <i className="ri-user-line"></i>
              <span>Profile</span>
            </button>
            <button
              onClick={() => {
                /* Navigate to settings */
              }}
              className="w-full text-left px-4 py-2 rounded hover:bg-secondary flex items-center gap-3"
            >
              <i className="ri-settings-4-line"></i>
              <span>Settings</span>
            </button>
            <hr className="my-2" />
            <button
              className="w-full text-left px-4 py-2 rounded hover:bg-secondary flex items-center gap-3 text-red-500"
            >
              <i className="ri-logout-box-line"></i>
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feed;

