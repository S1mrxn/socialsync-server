import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user { id username email }
    }
  }
`;

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: ({ login }) => {
      localStorage.setItem('token', login.token);
      setIsLoggedIn(true);
      navigate('/feed');
    },
  });

  const handleSubmit = e => {
    e.preventDefault();
    login({ variables: { email, password } });
  };

  return (
    <div className="bg-primary min-h-screen flex flex-col text-white">
      {/* Navbar */}
      <nav className="bg-primary border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-[Pacifico] text-secondary">SocialSync</Link>
            <Link to="/signup" className="hover:text-secondary text-sm">Create account</Link>
          </div>
        </div>
      </nav>

      {/* Main Form */}
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full relative">
          <Link to="/" className="absolute -right-12 top-0 w-8 h-8 flex items-center justify-center rounded border border-gray-600 hover:bg-gray-700/50 text-gray-400 hover:text-white">
            <i className="ri-close-line text-lg"></i>
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-accent mb-2">Log in</h1>
            <p className="text-gray-300 text-sm">Welcome back — please log in to continue</p>
          </div>

          <div className="bg-primary/50 rounded-xl shadow-lg p-8 mb-6 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-white text-black placeholder-gray-500 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 bg-white text-black placeholder-gray-500 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                  required
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">
                  {error.message.includes('duplicate') ? 'User already exists' : error.message}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-secondary text-white py-2 rounded hover:bg-secondary/90"
              >
                {loading ? 'Logging in…' : 'Log in'}
              </button>
            </form>

            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <span className="relative flex justify-center px-2 bg-primary text-gray-400 text-sm">Or continue with</span>
            </div>

            <button className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-gray-600 rounded hover:bg-primary/50">
              <i className="ri-google-fill text-xl mr-2"></i> Google
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
