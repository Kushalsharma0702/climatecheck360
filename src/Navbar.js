import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black">
      <nav aria-label="Top" className="bg-black px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="flex h-16 items-center">
          {/* App name on the left */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white px-2 py-1 rounded">
              ClimateCheck360
            </span>
          </div>
      </nav>
    </header>
  );
}

export default Navbar;
