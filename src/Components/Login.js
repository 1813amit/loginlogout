import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../../src/RippleEffect.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));

    if (!userData || userData.email !== email || userData.password !== password) {
      setError('Invalid email or password. Please try again.');
      return;
    }

    console.log('Login successful!');
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 bg-orange-500">
        <img
          src="https://thumbs.dreamstime.com/b/cartoon-secretary-office-scenery-background-colorful-design-vector-illustration-165665630.jpg"
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 flex items-center justify-center bg-white p-8 md:p-16">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 transition duration-300"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 transition duration-300"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-orange-500 text-white font-bold rounded-md ripple transition-transform duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-4">
            Don't have an account? 
            <Link to="/register" className="text-orange-500 hover:underline"> Register here.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
