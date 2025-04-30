import { useEffect, useState } from 'react';
import React from "react";

function NavBar({ darkMode, toggleMode }) {
    return(
        <nav className={`flex justify-between items-center px-10 py-4 bg-cyan-400`}>
          {/* <div className='flex flex-col items-center'> */}
          <a href="#" className="text-2xl text-black font-bold hover:text-white">
            <div className="text-2xl text-inherit font-bold">KanStore</div>
            <div className="text-sm text-inherit text-center">Kantas Store</div>
        </a>
          {/* </div> */}
          <div className="flex space-x-6 text-black">
            <a href="#" className="text-inherit hover:text-white">Home</a>
            <a href="#" className="text-inherit hover:text-white">Product</a>
            <a href="#" className="text-inherit hover:text-white">Contact</a>
            <a href="#" className="text-inherit hover:text-white">About Us</a>
          </div>
        </nav>
    )
}

export default NavBar;