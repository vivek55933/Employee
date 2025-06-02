import React, { useState } from 'react';

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password);
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-100 to-white px-4">
      <div className="w-full max-w-md p-10 bg-white rounded-2xl shadow-xl border border-emerald-400">
        {/* Logo or Title */}
        <div className="flex justify-center mb-6">
          {/* You can replace this with an actual logo */}
          <span className="text-4xl font-bold text-emerald-600">EMS</span>
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login to Your Account</h2>

        <form onSubmit={submitHandler} className="flex flex-col space-y-5" autoComplete="off">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="new-email"
            className="px-5 py-3 text-gray-900 rounded-full border border-emerald-600 bg-transparent text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
            className="px-5 py-3 text-gray-900 rounded-full border border-emerald-600 bg-transparent text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <div className="text-right text-sm">
            <a href="#" className="text-emerald-600 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 text-white text-lg font-semibold py-3 rounded-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
