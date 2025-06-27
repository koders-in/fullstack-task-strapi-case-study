
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Menu from "./menu";
export default function Header() {
  return (
    <div className="flex justify-between items-center p-5 sticky top-0 z-50 bg-[#1e1e1e] w-full">
      <div className="text-2xl font-bold text-white flex gap-2 items-center">
        <img src="./logo.webp" alt="" className="w-8 h-8" />
        Defendia
      </div>
      <nav className="hidden md:flex gap-8 text-[15px] text-white/80">
        <Link to="#">Personal</Link>
        <Link to="#">Family</Link>
        <Link to="#">Pricing</Link>
        <Link to="#" className="flex gap-1 items-center">
          Resources <ChevronDown className="w-4 h-4" />
        </Link>
        <Link to="#" className="flex gap-1 items-center">
          Explore <ChevronDown className="w-4 h-4" />
        </Link>
      </nav>
      <div className="hidden md:flex gap-6 text-[15px] text-white/80">
        <Link to="#">Help</Link>
        <Link to="#">Contact Sales</Link>
        <Link to="#" className="flex gap-1 items-center">
          Sign in <ChevronDown className="w-4 h-4" />
        </Link>
      </div>
      <Menu></Menu>
    </div>
  );
}
