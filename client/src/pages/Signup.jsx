import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

const REGISTER_MUTATION = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      token
      user { id username email }
    }
  }
`;

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const [register, { loading, error }] = useMutation(REGISTER_MUTATION, {
    onCompleted: ({ register }) => {
      localStorage.setItem('token', register.token);
      navigate('/feed');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert('Passwords do not match');
    }
    if (!termsAccepted) {
      return alert('You must accept the Terms of Service');
    }
    register({ variables: { username: fullName, email, password } });
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={e => setTermsAccepted(e.target.checked)}
            required
          />
          <span className="ml-2">I agree to the Terms of Service</span>
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating account…' : 'Sign Up'}
        </button>
        {error && <p className="text-red-500">{error.message}</p>}
      </form>
    </div>
  );
}

export default Signup;




