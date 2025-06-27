import React, { useEffect, useState, useCallback } from "react";
import {
  Menu as MenuIcon,
  User,
  Users,
  DollarSign,
  BookOpen,
  Compass,
  HelpCircle,
  Phone,
  LogIn,
} from "lucide-react";
import { Link } from "react-router-dom";

function MenuLink({
  to,
  icon: Icon,
  label,
  className,
}: {
  to: string;
  icon: React.ElementType;
  label: string;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-3 py-2 font-semibold rounded-lg hover:bg-[#f5f5f5] ${className}`}
    >
      <Icon className="w-5 h-5" />
      {label}
    </Link>
  );
}

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback((ev: KeyboardEvent) => {
    if (ev.key.toLowerCase() === "escape") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
    };
  }, [close]);

  return (
    <>
      <button className="p-2 block md:hidden" onClick={() => setIsOpen(true)}>
        <MenuIcon className="text-white w-6 h-6" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="text-2xl p-3 mt-4 font-bold flex gap-2 items-center">
            <img src="./logo.webp" alt="" className="w-8 h-8" />
            Defendia
          </div>

          <div className="flex flex-col flex-1 p-4 gap-6">
            {/* Primary Nav */}
            <nav className="flex flex-col gap-4 text-base font-medium">
              <MenuLink to="#" icon={User} label="Personal" />
              <MenuLink to="#" icon={Users} label="Family" />
              <MenuLink to="#" icon={DollarSign} label="Pricing" />
              <MenuLink to="#" icon={BookOpen} label="Resources" />
              <MenuLink to="#" icon={Compass} label="Explore" />
            </nav>

            {/* Secondary Nav pushed to bottom */}
            <nav className="flex flex-col gap-4 text-base font-medium mt-auto">
              <MenuLink to="#" icon={HelpCircle} label="Help" />
              <MenuLink to="#" icon={Phone} label="Contact Sales" />
              <MenuLink to="#" icon={LogIn} label="Sign In" />
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}
