import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../../src/RippleEffect.css";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    if (!name) {
      setError('Name is required');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Save user data in localStorage
    localStorage.setItem('user', JSON.stringify({ name, email, password }));

    console.log('Registration successful!');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 bg-orange-500">
        <img
          src="https://cbx-prod.b-cdn.net/COLOURBOX18070543.jpg?width=800&height=800&quality=70"
          alt="Register Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 flex items-center justify-center bg-white p-8 md:p-16">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">Register</h1>
          <form onSubmit={handleRegister} className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 transition duration-300"
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 transition duration-300"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-orange-500 text-white font-bold rounded-md ripple transition-transform duration-300 transform hover:scale-105"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account? 
            <Link to="/login" className="text-orange-500 hover:underline"> Login here.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
