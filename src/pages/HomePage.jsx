import { useEffect, useState } from 'react';

import React from "react";

const data = [
  {
    id: 1,
    title: "Laptop Gaming XZ",
    body: "Laptop performa tinggi dengan prosesor Ryzen 7 dan GPU RTX 4060, cocok untuk gaming dan produktivitas.",
    imageUrl: "laptop.jpg", // ganti dengan URL gambar laptop
  },
  {
    id: 2,
    title: "Headset Wireless Pro",
    body: "Headset nirkabel dengan kualitas suara jernih dan noise cancelling aktif.",
    imageUrl: "headset.jpg", // ganti dengan URL gambar headset
  },
  {
    id: 3,
    title: "Smartwatch FitLife",
    body: "Jam tangan pintar dengan fitur pelacak aktivitas dan pemantau detak jantung.",
    imageUrl: "smartwatch.jpg", // ganti dengan URL gambar smartwatch
  },
  {
    id: 4,
    title: "Kamera Mirrorless X10",
    body: "Kamera ringan dengan sensor APS-C 24MP dan dukungan perekaman 4K.",
    imageUrl: "kamera.jpg", // ganti dengan gambar kamera jika tersedia
  },
  {
    id: 5,
    title: "Kursi Gaming Comfort Z",
    body: "Kursi ergonomis dengan busa premium untuk kenyamanan bermain atau bekerja berjam-jam.",
    imageUrl: "kamera.jpg", // bisa diganti dengan gambar kursi
  },
  {
    id: 6,
    title: "Tablet EduTab 10",
    body: "Tablet ringan untuk pembelajaran daring, dengan stylus dan layar 10 inci.",
    imageUrl: "kamera.jpg", 
  },
  {
    id: 7,
    title: "Speaker Bluetooth BassBoom",
    body: "Speaker portabel dengan suara bass kuat dan baterai tahan hingga 12 jam.",
    imageUrl: "kamera.jpg",
  },
  {
    id: 8,
    title: "Keyboard Mechanical RGB",
    body: "Keyboard mekanik dengan pencahayaan RGB dan switch biru tactile.",
    imageUrl: "kamera.jpg",
  },
  {
    id: 9,
    title: "Drone AirCam V2",
    body: "Drone ringan dengan kamera 1080p dan kontrol stabil untuk pemula.",
    imageUrl: "kamera.jpg",
  },
  {
    id: 10,
    title: "Power Bank 20.000mAh",
    body: "Pengisi daya portabel berkapasitas besar dengan dua port USB-A dan USB-C.",
    imageUrl: "kamera.jpg", // bisa diganti
  },
  {
    id: 11,
    title: "Mouse Wireless Silent",
    body: "Mouse nirkabel tanpa suara klik, nyaman digunakan di tempat kerja atau belajar.",
    imageUrl: "kamera.jpg",
  },
  {
    id: 12,
    title: "Printer All-in-One JetPrint",
    body: "Printer multifungsi dengan kemampuan scan, copy, dan print warna.",
    imageUrl: "kamera.jpg",
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
        
        <nav className={`flex justify-between items-center px-10 py-4 bg-cyan-400`}>
          <a href="#" className="text-2xl text-black font-bold hover:text-white">
            <div className="text-2xl text-inherit font-bold">KanStore</div>
            <div className="text-sm text-inherit text-center">Kantas Store</div>
        </a>
          <div className="flex space-x-6 text-black">
            <a href="#" className="text-inherit hover:text-white">Home</a>
            <a href="#" className="text-inherit hover:text-white">Product</a>
            <a href="#" className="text-inherit hover:text-white">Contact</a>
            <a href="#" className="text-inherit hover:text-white">About Us</a>
          </div>
        </nav>
        
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-black">Welcome To Kantas Store!! ✨</h1>
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
