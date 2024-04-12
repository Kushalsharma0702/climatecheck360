import React, { useState } from "react";

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

          {/* Navigation links on the right */}
          <div className="ml-auto flex items-center">
            <div>
              <a href="/signup" className="text-white">Login</a>
            </div>
            <a href="#" className="text-white">About</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
