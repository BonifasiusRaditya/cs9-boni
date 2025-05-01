import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Log data yang akan dikirim untuk memastikan semuanya benar
      console.log("Data yang dikirim:", {
        email,
        password,
        name: username,
      });
  
      // Kirim data ke backend menggunakan axios
      const response = await axios.post('https://sbd-express.fbqyyk.easypanel.host/user/register', {
        email,
        password,
        name: username, // Backend menerima "name" sebagai username
      });
  
      // Jika berhasil, tampilkan pesan sukses dan arahkan ke halaman login
      alert('Registrasi berhasil!');
      console.log("Response dari backend:", response.data);
      navigate('/login'); // Redirect ke halaman login
    } catch (error) {
      // Log error untuk debugging
      console.error("Error saat registrasi:", error);
  
      // Ambil pesan error dari response backend jika ada
      const errorMessage = error.response?.data?.error || 'Failed to register';
      alert(`Error: ${errorMessage}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600">KanStore</h1>
        <p className="text-sm text-center text-gray-500 mb-6">Daftar Akun Baru</p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit"
            onClick={handleRegister}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
            Daftar
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-500">Dengan mendaftar, Anda setuju dengan <Link to="/terms" className="text-blue-500 hover:underline">Syarat dan Ketentuan</Link> kami.</p>

        <p className="mt-4 text-sm text-center text-black">
          Sudah ada akun? <Link to="/login" className="text-blue-500 hover:underline">Login di sini</Link>
        </p>
      </div>
    </div>
  );
}