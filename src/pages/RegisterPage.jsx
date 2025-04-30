import { text } from 'express';
import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login attempt:\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600">KanStore</h1>
        <p className="text-sm text-center text-gray-500 mb-6">Kantas Store</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required/>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required/>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required/>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-black">
          Sudah punya akun? <a href="/login" className="text-blue-500 hover:underline">Login di sini</a>
        </p>
      </div>
    </div>
  );
}
