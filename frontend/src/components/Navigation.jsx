import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-black text-white w-full shadow-md relative">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold tracking-wide">Defendia</div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 text-xs font-medium text-gray-400">
                    <a href="#" className="hover:text-blue-400 transition">Personal</a>
                    <a href="#" className="hover:text-blue-400 transition">Family</a>
                    <a href="#" className="hover:text-blue-400 transition">Prices</a>
                    <a href="#" className="hover:text-blue-400 transition"><span className="flex gap-0.3 items-center">Resources <ChevronDown className="h-4 pt-0.5" /></span> </a>
                    <a href="#" className="hover:text-blue-400 transition"><span className="flex gap-0.3 items-center">Explore <ChevronDown className="h-4 pt-0.5" /></span> </a>

                </nav>
                <nav className="hidden md:flex gap-5 text-xs font-medium text-gray-400">
                    <a href="#" className="hover:text-blue-400 transition">Help</a>
                    <a href="#" className="hover:text-blue-400 transition">Contact Sales</a>

                    <a href="#" className="hover:text-blue-400 transition"><span className="flex gap-0.3 items-center">Sign In <ChevronDown className="h-4 pt-0.5" /></span> </a>

                </nav>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-[64px] left-0 w-full bg-black px-4 pb-4 space-y-2 z-50">
                    <a href="#" className="block text-sm hover:text-blue-400">Personal</a>
                    <a href="#" className="block text-sm hover:text-blue-400">Family</a>
                    <a href="#" className="block text-sm hover:text-blue-400">Prices</a>
                    <a href="#" className="block text-sm hover:text-blue-400">Resources</a>
                    <a href="#" className="block text-sm hover:text-blue-400">Expolre</a>
                    <a href="#" className="block text-sm hover:text-blue-400">Help</a>
                    <a href="#" className="block text-sm hover:text-blue-400">Contack sales</a>
                    <a href="#" className="block text-sm hover:text-blue-400">Sign In</a>
                </div>
            )}

        </header>
    );
};

export default Navbar;

