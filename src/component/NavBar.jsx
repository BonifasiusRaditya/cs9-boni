import { useEffect, useState } from 'react';
import React from "react";

function NavBar({ darkMode, toggleMode }) {
    return(
        <nav className={`flex justify-between items-center px-10 py-4 bg-teal-400`}>
          <div className='flex flex-col items-center'>
            <div className="text-2xl text-white font-bold">KanStore</div>
            <div className="text-sm text-gray-400 text-center">Kantas Store</div>
          </div>
          <div className="flex space-x-6 font-white">
            <a href="#" className="hover:text-blue">Profile</a>
            <a href="#" className="hover:text-blue">Produk</a>
            <a href="#" className="hover:text-blue">Contact</a>
            <a href="#" className="hover:text-blue">About Us</a>
          </div>
        </nav>
    )
}

export default NavBar;