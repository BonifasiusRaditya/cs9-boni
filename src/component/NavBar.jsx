import { useEffect, useState } from 'react';
import React from "react";

function NavBar({ darkMode, toggleMode }) {
    return(
        <nav className={`flex justify-between items-center px-10 py-4 bg-cyan-400`}>
          <div className='flex flex-col items-center'>
            <div className="text-2xl text-black font-bold">KanStore</div>
            <div className="text-sm text-gray-800 text-center">Kantas Store</div>
          </div>
          <div className="flex space-x-6 text-black">
            <a href="#" className="text-inherit hover:text-white">Profile</a>
            <a href="#" className="text-inherit hover:text-white">Produk</a>
            <a href="#" className="text-inherit hover:text-white">Contact</a>
            <a href="#" className="text-inherit hover:text-white">About Us</a>
          </div>
        </nav>
    )
}

export default NavBar;