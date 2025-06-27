import {  Languages } from "lucide-react";
import {
  FaMedium,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTelegram,
} from "react-icons/fa6";
import {
  FaLinkedin,
  FaYoutube,
  FaDiscord,
  FaApple,
  FaChrome,
  FaLinux,
  FaAndroid,
  FaWindows,
  FaFirefox,
  FaOpera,
  FaEdge,
  FaSafari,
} from "react-icons/fa";
import { SiMacos } from "react-icons/si";
import { CiVault } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white px-6 py-12 w-full">
      <div className="w-fit mx-auto">
        <div className=" mx-auto flex flex-col justify-between items-start gap-10 w-full">
          <div className="flex sm:items-center justify-between w-full flex-col gap-4 sm:flex-row items-start">
            <div className="flex items-center gap-2 text-xl font-bold">
              <img src="./logo.webp" alt="" className="w-8 h-8" />
              Defendia
            </div>

            <div className="flex gap-4 flex-wrap items-center ">
              <FaMedium />
              <FaXTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaTelegram />
              <FaLinkedin />
              <FaYoutube className="w-5 h-5" />
              <FaDiscord className="w-5 h-5" />
              <div className="flex items-center gap-1  ml-4 text-sm text-gray-400">
                <Languages className="w-4 h-4" />
                English
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 text-sm text-white opacity-70">
            <div>
              <h4 className="mb-3  ">DEFENDIA</h4>
              <ul className="space-y-2 opacity-70 ">
                <li>Personal</li>
                <li>Family</li>
                <li>Pricing</li>
                <li>Features</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3">PROGRAMS</h4>
              <ul className="space-y-2 opacity-70 ">
                <li>Refer a Friend</li>
                <li className="flex items-center gap-2">
                  For Universities
                  <span className="text-xs bg-[#353535] px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  For Non-Profits
                  <span className="text-xs bg-[#353535] px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3">RESOURCES</h4>
              <ul className="space-y-2 opacity-70 ">
                <li>Blogs</li>
                <li>Case Studies</li>
                <li>Passwordless</li>
                <li>Most Commonly Used Passwords</li>
                <li>Frequently Forgotten Passwords</li>
              </ul>
            </div>

            <div>
              <h4 className=" mb-3">FREE TOOLS</h4>
              <ul className="space-y-2 opacity-70 ">
                <li>Username Generator</li>
                <li>Password Generator</li>
                <li>Password Strength Checker</li>
                <li>Data Breach Scanner</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 ">COMPANY</h4>
              <ul className="space-y-2 opacity-70 ">
                <li>About Us</li>
                <li>Help Center</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-10 border-t border-gray-800"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-xs text-gray-300">
          <div>
            <h4 className=" mb-4">GET DEFENDIA ON</h4>
            <div className="flex flex-wrap gap-3">
              <PlatformIcon icon={<FaApple />} label="iOS" />
              <PlatformIcon icon={<FaAndroid />} label="Android" />
              <PlatformIcon icon={<FaWindows />} label="Windows" />
              <PlatformIcon icon={<FaLinux />} label="Linux" />
              <PlatformIcon icon={<SiMacos />} label="MacOS" />
              <PlatformIcon icon={<CiVault />} label="Web vault" />
            </div>
          </div>
          <div>
            <h4 className=" mb-4">BROWSER EXTENSIONS</h4>
            <div className="flex flex-wrap gap-3">
              <PlatformIcon icon={<FaChrome />} label="Chrome" />
              <PlatformIcon icon={<FaFirefox />} label="Firefox" />
              <PlatformIcon icon={<FaSafari />} label="Safari" />
              <PlatformIcon icon={<FaOpera />} label="Opera" />
              <PlatformIcon icon={<FaEdge />} label="Edge" />
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-white opacity-50 text-center space-y-1 flex items-center sm:flex-row flex-col gap-2 justify-between ">
          <p>© 2025 Defendia. All Rights Reserved</p>
          <div className="flex flex-wrap justify-center gap-4  items-center  sm:flex-row flex-col ">
            <span>Privacy Policy</span>
            <span>Business Policy</span>
            <span>Terms of Service</span>
            <span>Terms (Business)</span>
            <span>Cookie Preferences</span>
            <span>DPA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const PlatformIcon = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex flex-col items-center gap-1 w-14">
    <div className="bg-[#2b2b2b]  p-2 rounded-full  ">{icon}</div>
    <span className="text-xs">{label}</span>
  </div>
);

export default Footer;
