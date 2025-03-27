import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="bg-[#0a1123] min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-[#0a1123] z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
          <a href="#" className="text-3xl font-['Pacifico'] text-secondary">SocialSync</a>
          <div className="flex gap-4">
            <a href="#features" className="text-white hover:text-secondary">Features</a>
            <a href="#about" className="text-white hover:text-secondary">About</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-[#ba2c94] mb-6">Connect, Share & Grow Together</h1>
            <p className="text-xl text-white mb-8">
              Join millions of people who use SocialSync to share ideas, discover trending content, and build meaningful connections.
            </p>
            <div className="flex gap-4">
              <Link
                to="/signup"
                className="px-8 py-3 bg-secondary text-white text-lg hover:bg-secondary/90 rounded-button"
              >
                Join Now
              </Link>
              <Link
                to="/login"
                className="px-8 py-3 border-2 border-secondary text-secondary hover:bg-secondary/10 text-lg rounded-button"
              >
                Log in
              </Link>
            </div>
          </div>
          <img
            src="https://public.readdy.ai/ai/img_res/6fd32ba8ee5fbda1235a24f3334d48a4.jpg"
            className="rounded-2xl shadow-2xl"
            alt="Social Collaboration"
          />
        </section>

        <section id="features" className="py-20 bg-[#0a1123]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Why Choose SocialSync?</h2>
              <p className="text-xl text-white">
                Everything you need to connect and share with your community
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#0a1123] border border-gray-800 p-8 rounded-xl">
                <i className="ri-group-line text-4xl text-secondary mb-4"></i>
                <h3 className="text-xl font-semibold text-primary mb-2">Smart Communities</h3>
                <p className="text-white">Join communities based on your interests and connect with like-minded people.</p>
              </div>
              <div className="bg-[#0a1123] border border-gray-800 p-8 rounded-xl">
                <i className="ri-shield-check-line text-4xl text-secondary mb-4"></i>
                <h3 className="text-xl font-semibold text-primary mb-2">Privacy First</h3>
                <p className="text-white">Control who sees your content and how you interact.</p>
              </div>
              <div className="bg-[#0a1123] border border-gray-800 p-8 rounded-xl">
                <i className="ri-refresh-line text-4xl text-secondary mb-4"></i>
                <h3 className="text-xl font-semibold text-primary mb-2">New Way To Connect</h3>
                <p className="text-white">Focus on meaningful interactions without the noise.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://public.readdy.ai/ai/img_res/385aa475594a54d5eb2e7c9df4acc7bd.jpg"
              className="rounded-2xl"
              alt="About SocialSync"
            />
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-xl text-white mb-8">
                Founded in 2025 to help people authentically connect and share their stories. Today, millions use SocialSync to build real relationships.
              </p>
            </div>
          </div>
        </section>

        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
            <div>
              <a href="#" className="text-2xl font-['Pacifico'] text-secondary mb-4 block">SocialSync</a>
              <p className="text-gray-400">Connecting people, sharing stories.</p>
            </div>
            <div><h4 className="font-semibold mb-4">Product</h4><a href="#" className="text-gray-400 hover:text-secondary">Features</a></div>
            <div><h4 className="font-semibold mb-4">Company</h4><a href="#" className="text-gray-400 hover:text-secondary">About</a></div>
            <div><h4 className="font-semibold mb-4">Legal</h4><a href="#" className="text-gray-400 hover:text-secondary">Privacy</a></div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            &copy; 2025 SocialSync. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}


