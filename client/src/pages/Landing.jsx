import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <div className="bg-[#0a1123]">
      <nav className="fixed top-0 left-0 right-0 bg-[#0a1123] z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <a href="#" className="text-3xl font-['Pacifico'] text-secondary">
                SocialSync
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#features" className="text-white hover:text-secondary">
                Features
              </a>
              <a href="#about" className="text-white hover:text-secondary">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('https://public.readdy.ai/ai/img_res/6c029d2dbfc41220fa2d4e3c6fa116a6.jpg')] opacity-10"
            aria-hidden="true"
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-[#ba2c94] mb-6">
                  Connect, Share & Grow Together
                </h1>
                <p className="text-xl text-white mb-8">
                  Join millions of people who use SocialSync to share ideas,
                  discover trending content, and build meaningful connections.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowSignupModal(true)}
                    className="px-8 py-3 bg-secondary text-white text-lg hover:bg-secondary/90 !rounded-button"
                  >
                    Join Now
                  </button>
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="px-8 py-3 border-2 border-secondary text-secondary hover:bg-secondary/10 text-lg !rounded-button"
                  >
                    Log in
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://public.readdy.ai/ai/img_res/6fd32ba8ee5fbda1235a24f3334d48a4.jpg"
                  className="rounded-2xl shadow-2xl"
                  alt="Social Collaboration"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-[#0a1123]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Why Choose SocialSync?
              </h2>
              <p className="text-xl text-white">
                Everything you need to connect and share with your community
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#0a1123] border border-gray-800 p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-group-line text-2xl text-secondary"></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Smart Communities
                </h3>
                <p className="text-white">
                  Join communities based on your interests and connect with
                  like-minded people from around the world.
                </p>
              </div>
              <div className="bg-[#0a1123] border border-gray-800 p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-2xl text-secondary"></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Privacy First
                </h3>
                <p className="text-white">
                  Advanced privacy controls let you decide who sees your content
                  and how you interact with others.
                </p>
              </div>
              <div className="bg-[#0a1123] border border-gray-800 p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-refresh-line text-2xl text-secondary"></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  New Way To Connect
                </h3>
                <p className="text-white">
                  We've re-imagined social networking by keeping the features you
                  love while eliminating the noise and distractions that get in
                  the way of genuine connections.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://public.readdy.ai/ai/img_res/385aa475594a54d5eb2e7c9df4acc7bd.jpg"
                  className="rounded-2xl"
                  alt="About SocialSync"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Our Story
                </h2>
                <p className="text-xl text-white mb-8">
                  Started in 2025, SocialSync was born from a simple idea: to
                  create a platform where people can authentically connect and
                  share their stories. Today, we're proud to help millions of
                  users express themselves and build meaningful relationships.
                </p>
                <div className="flex gap-8">
                  <div>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                      <i className="ri-heart-line text-2xl text-secondary"></i>
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      User-Focused
                    </h4>
                    <p className="text-white">
                      Every feature is designed with our users in mind.
                    </p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                      <i className="ri-global-line text-2xl text-secondary"></i>
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Global Reach
                    </h4>
                    <p className="text-white">
                      Connect with people from all around the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <a
                  href="#"
                  className="text-2xl font-['Pacifico'] text-secondary mb-4 block"
                >
                  SocialSync
                </a>
                <p className="text-gray-400">
                  Connecting people, sharing stories.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-secondary">
                      Features
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-secondary">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-secondary">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-secondary">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center">
              <p className="text-gray-400">
                &copy; 2025 SocialSync. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#f5f6f8] rounded-xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">Log in</h3>
              <button
                onClick={() => setShowLoginModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-secondary"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-secondary hover:text-secondary/80"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-secondary text-white hover:bg-secondary/90 !rounded-button"
              >
                Log in
              </button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[#f5f6f8] text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 !rounded-button">
                  <i className="ri-google-fill text-xl mr-2"></i>
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSignupModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#f5f6f8] rounded-xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Create account
              </h3>
              <button
                onClick={() => setShowSignupModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                />
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-1 text-secondary"
                  required
                />
                <label className="ml-2 text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-secondary hover:text-secondary/80">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-secondary hover:text-secondary/80">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-secondary text-white hover:bg-secondary/90 !rounded-button"
              >
                Create account
              </button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[#f5f6f8] text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 !rounded-button">
                  <i className="ri-google-fill text-xl mr-2"></i>
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;

