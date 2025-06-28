import React from "react";
import Logo from "../assets/defendia-logo.png";
import {
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Send,
  Languages,
  // Chrome,
  Github,
  // Apple,
  // Android,
  // Windows,
  // Linux,
  // Firefox,
  // Safari,
  // Edge,
} from "lucide-react";

function Footer() {
  return (
    <div className="w-screen bg-black text-white px-10 py-12 relative">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 ">
        {/* Top Section */}
        <div className="flex md:flex-row justify-between items-start gap-10">
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="Defendia Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold">Defendia</span>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="bg-gray-900 p-2 rounded-md">
              <Twitter size={20} />
            </div>
            <div className="bg-gray-900 p-2 rounded-md">
              <Facebook size={20} />
            </div>
            <div className="bg-gray-900 p-2 rounded-md">
              <Instagram size={20} />
            </div>
            <div className="bg-gray-900 p-2 rounded-md">
              <Youtube size={20} />
            </div>
            <div className="bg-gray-900 p-2 rounded-md">
              <Send size={20} />
            </div>
            <div className="bg-gray-900 p-2 rounded-md">
              <Github size={20} />
            </div>
            <div className="flex items-center gap-1 text-sm mt-2">
              <Languages size={16} />
              <span>English</span>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="absolute left-0 right-0 top-28 h-px bg-gray-700"></div>

        {/* Navigation Columns */}

        <div className="flex flex-wrap justify-center gap-20 text-sm">
          <div>
            <h5 className="font-semibold mb-2">DEFENDIA</h5>
            <p>Personal</p>
            <p>Family</p>
            <p>Pricing</p>
            <p>Features</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">PROGRAMS</h5>
            <p>Refer a Friend</p>
            <p>For Universities</p>
            <p>For Non-Profits</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">RESOURCES</h5>
            <p>Blog</p>
            <p>Case Studies</p>
            <p>Passwordless</p>
            <p>Commonly Used Passwords</p>
            <p>Frequently Forgotten</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">FREE TOOLS</h5>
            <p>Username Generator</p>
            <p>Password Generator</p>
            <p>Password Checker</p>
            <p>Data Breach Scanner</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">COMPANY</h5>
            <p>About Us</p>
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>Data Scanner</p>
          </div>
        </div>
        {/* Divider */}
        <div className="w-full h-px bg-gray-700 my-4"></div>

        {/* Platforms */}
        <div className="flex flex-wrap justify-between items-start gap-10">
          <div>
            <h4 className="font-semibold mb-2">Get DEFENDIA ON</h4>
            <div className="flex gap-3 flex-wrap">
              <div className="bg-gray-900 px-4 py-2 rounded flex items-center gap-2">
                {/* <Apple size={16} /> */}
                <span>iOS</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded flex items-center gap-2">
                {/* <Android size={16} /> */}
                <span>Android</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded flex items-center gap-2">
                {/* <Windows size={16} />
                <Linux size={16} /> */}
                <span>Desktop</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Browser Extensions</h4>
            <div className="flex gap-3 flex-wrap">
              <div className="bg-gray-900 px-4 py-2 rounded flex items-center gap-2">
                {/* <Chrome size={16} /> */}
                <span>Chrome</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded flex items-center gap-2">
                {/* <Firefox size={16} /> */}
                <span>Firefox</span>
              </div>
              <div className="bg-gray-900 px-4 py-2 rounded flex items-center gap-2">
                {/* <Safari size={16} />
                <Edge size={16} /> */}
                <span>Others</span>
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="absolute left-0 right-0 bottom-25 h-px bg-gray-700"></div>
        {/* Bottom Section */}
        <div className="text-xs flex flex-wrap gap-4 justify-between items-center text-gray-400 mt-10">
          <p>
            &copy; {new Date().getFullYear()} Defendia. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <span>Privacy Policy</span>
            <span>Business Policy</span>
            <span>Terms of Service</span>
            <span>Teams (Business)</span>
            <span>Cookies Preferences</span>
            <span>DPA</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
