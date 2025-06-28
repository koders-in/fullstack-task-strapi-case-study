import React from "react";
import Logo from "../assets/defendia-logo.png";

function NavBar() {
  return (
    <div className="w-full bg-black text-white  py-4 flex items-center justify-between shadow-md">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Defendia Logo" className="w-8 h-8" />
        <span className="text-xl font-bold">Defendia</span>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        <span className="hover:text-blue-400 cursor-pointer">Personal</span>
        <span className="hover:text-blue-400 cursor-pointer">Family</span>
        <span className="hover:text-blue-400 cursor-pointer">Pricing</span>
        <span className="hover:text-blue-400 cursor-pointer">Resources</span>
        <span className="hover:text-blue-400 cursor-pointer">Explore</span>
      </div>

      {/* Right - Actions */}
      <div className="flex gap-4 text-sm font-medium">
        <span className="hover:text-blue-400 cursor-pointer">Help</span>
        <span className="hover:text-blue-400 cursor-pointer">Contact Sales</span>
        <span className="hover:text-blue-400 cursor-pointer">Sign in</span>
      </div>
    </div>
  );
}

export default NavBar;
