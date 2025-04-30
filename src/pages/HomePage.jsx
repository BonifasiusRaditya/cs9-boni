import komputer from '../assets/komputer.jpeg';
import biomedik from '../assets/biomedik.jpeg';
import elektro from '../assets/elektro.jpeg';
import NavBar from '../component/navbar';
import { useEffect, useState } from 'react';

import React from "react";

const data = [
  {
    id: 1,
    title: "Laptop Gaming XZ",
    body: "Laptop performa tinggi dengan prosesor Ryzen 7 dan GPU RTX 4060, cocok untuk gaming dan produktivitas.",
    imageUrl: komputer,
  },
  {
    id: 2,
    title: "Headset Wireless Pro",
    body: "Headset nirkabel dengan kualitas suara jernih dan noise cancelling aktif.",
    imageUrl: elektro,
  },
  {
    id: 3,
    title: "Smartwatch FitLife",
    body: "Jam tangan pintar dengan fitur pelacak aktivitas dan pemantau detak jantung.",
    imageUrl: biomedik,
  },
  {
    id: 4,
    title: "Kamera Mirrorless X10",
    body: "Kamera ringan dengan sensor APS-C 24MP dan dukungan perekaman 4K.",
    imageUrl: elektro, // ganti dengan gambar kamera jika tersedia
  },
  {
    id: 5,
    title: "Kursi Gaming Comfort Z",
    body: "Kursi ergonomis dengan busa premium untuk kenyamanan bermain atau bekerja berjam-jam.",
    imageUrl: komputer, // bisa diganti dengan gambar kursi
  },
  {
    id: 6,
    title: "Tablet EduTab 10",
    body: "Tablet ringan untuk pembelajaran daring, dengan stylus dan layar 10 inci.",
    imageUrl: biomedik, // ganti dengan gambar tablet
  },
  {
    id: 7,
    title: "Speaker Bluetooth BassBoom",
    body: "Speaker portabel dengan suara bass kuat dan baterai tahan hingga 12 jam.",
    imageUrl: elektro,
  },
  {
    id: 8,
    title: "Keyboard Mechanical RGB",
    body: "Keyboard mekanik dengan pencahayaan RGB dan switch biru tactile.",
    imageUrl: komputer,
  },
  {
    id: 9,
    title: "Drone AirCam V2",
    body: "Drone ringan dengan kamera 1080p dan kontrol stabil untuk pemula.",
    imageUrl: elektro,
  },
  {
    id: 10,
    title: "Power Bank 20.000mAh",
    body: "Pengisi daya portabel berkapasitas besar dengan dua port USB-A dan USB-C.",
    imageUrl: biomedik, // bisa diganti
  },
  {
    id: 11,
    title: "Mouse Wireless Silent",
    body: "Mouse nirkabel tanpa suara klik, nyaman digunakan di tempat kerja atau belajar.",
    imageUrl: komputer,
  },
  {
    id: 12,
    title: "Printer All-in-One JetPrint",
    body: "Printer multifungsi dengan kemampuan scan, copy, dan print warna.",
    imageUrl: elektro,
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
