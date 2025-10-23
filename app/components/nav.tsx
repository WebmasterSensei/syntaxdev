"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const routes = [
    {
      id: 1,
      nav: "Home",
      route: "/"
    },
    {
      id: 2,
      nav: "About",
      route: "/about"
    },
    {
      id: 3,
      nav: "Our Projects",
      route: "/projects"
    }
  ];
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-linear-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
            SyntaXDev.
          </div>

          <div className="hidden md:flex space-x-8">
            {routes.map((item) => (
              <Link
                key={item.id}
                href={item.route}
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {item.nav}
              </Link>
            ))}
          </div>

          <a href="/contact">
            <button className="hidden md:block px-6 py-2 bg-linear-to-r from-blue-500 to-blue-900 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Get Started
            </button>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {routes.map((item) => (
              <a
                key={item.id}
                href={item.route}
                className="block text-white/80 hover:text-white transition-colors"
              >
                {item.nav}
              </a>
            ))}

            <a href="/contact/">
              {" "}
              <button className="w-full px-6 py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full">
                Get Started
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
