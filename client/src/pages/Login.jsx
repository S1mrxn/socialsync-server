import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user { id username email }
    }
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: ({ login }) => {
      localStorage.setItem('token', login.token);
      navigate('/feed');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ variables: { email, password } });
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
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
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in…' : 'Login'}
        </button>
        {error && <p className="text-red-500">{error.message}</p>}
      </form>
    </div>
  );
}

export default Login;

