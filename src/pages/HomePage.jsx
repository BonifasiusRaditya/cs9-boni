import komputer from '../assets/komputer.jpeg';
import biomedik from '../assets/biomedik.jpeg';
import elektro from '../assets/elektro.jpeg';
import NavBar from '../component/navbar';
import { useEffect, useState } from 'react';

import React from "react";

const data = [
  {
    id: 1,
    title: "Teknik Komputer",
    body: "Mempelajari sistem komputer dari perangkat keras hingga perangkat lunak, termasuk jaringan dan sistem cerdas.",
    imageUrl: komputer,
  },
  {
    id: 2,
    title: "Teknik Elektro",
    body: "Fokus pada analisis dan perancangan sistem kelistrikan seperti tenaga, sinyal, dan elektronik.",
    imageUrl: elektro,
  },
  {
    id: 3,
    title: "Teknik Biomedik",
    body: "Menggabungkan ilmu teknik dan biologi untuk mengembangkan alat dan teknologi kesehatan guna mendukung diagnosis dan terapi medis.",
    imageUrl: biomedik,
  },
];

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => setDarkMode(!darkMode);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`Angka ${count} habis dibagi 10! 🎉`);
    }
  }, [count]); 

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
      <div className={`bg-white min-h-screen`}>
        
        <NavBar darkMode={darkMode} toggleMode={toggleMode} />
        
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Departemen Teknik Elektro</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h2 className="font-semibold text-black">{item.title}</h2>
                  <p className="text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
