import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

const REGISTER_MUTATION = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      token
      user { id username email }
    }
  }
`;

export default function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [register, { loading, error }] = useMutation(REGISTER_MUTATION, {
    onCompleted: ({ register }) => {
      localStorage.setItem('token', register.token);
      navigate('/feed');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return alert('Passwords do not match');
    if (!termsAccepted) return alert('You must accept Terms of Service');
    register({ variables: { username: fullName, email, password } });
  };

  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <nav className="bg-primary border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-[Pacifico] text-secondary">SocialSync</Link>
            <Link to="/login" className="text-white hover:text-secondary">Already have an account?</Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full relative">
          <Link to="/" className="absolute -right-12 top-0 w-8 h-8 flex items-center justify-center rounded border border-gray-600 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors">
            <i className="ri-close-line text-lg"></i>
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-accent mb-2">Create your account</h1>
            <p className="text-white">Join our community today</p>
          </div>

          <div className="bg-primary/50 rounded-xl shadow-lg p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  className="pl-10 w-full px-4 py-2 bg-primary/30 border border-gray-600 rounded focus:ring-2 focus:ring-secondary text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="pl-10 w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="pl-10 w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-secondary"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">Password must be at least 8 characters long</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className="pl-10 w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={e => setTermsAccepted(e.target.checked)}
                  className="w-4 h-4 text-secondary border-gray-300 rounded"
                  required
                />
                <label className="ml-2 text-sm text-gray-600">
                  I agree to the <a href="#" className="text-secondary hover:text-secondary/80">Terms of Service</a> and <a href="#" className="text-secondary hover:text-secondary/80">Privacy Policy</a>
                </label>
              </div>

              {error && <p className="text-red-500">{error.message}</p>}
              <button type="submit" disabled={loading} className="w-full bg-secondary text-white py-2 rounded hover:bg-secondary/90">
                {loading ? 'Creating account…' : 'Create Account'}
              </button>
            </form>

            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <span className="relative flex justify-center px-2 bg-primary text-white text-sm">Or continue with</span>
            </div>

            <button className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-gray-600 rounded-lg hover:bg-primary/50">
              <i className="ri-google-fill text-xl mr-2"></i>Google
            </button>
          </div>
        </div>
      </main>
    </div>
);
}





