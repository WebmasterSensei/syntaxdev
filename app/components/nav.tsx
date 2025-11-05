"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="/images/nextlogo.svg" alt="NextDev Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold bg-linear-to-r from-teal-300 to-blue-500 bg-clip-text text-transparent">
              NextDev.
            </span>
          </div>


          <div className="hidden md:flex space-x-8">
            {routes.map((item) => {
              const isActive = pathname === item.route;

              return (
                <Link
                  key={item.id}
                  href={item.route}
                  className={`
              relative transition-colors duration-300
              ${isActive ? "text-white" : "text-white/80 hover:text-white"}
              group
            `}
                >
                  {item.nav}

                  {/* Active underline / hover animation */}
                  <span
                    className={`
                absolute left-0 bottom-[-4px] h-[2px] w-full rounded-full
                bg-white transition-all duration-300
                ${isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                      }
              `}
                  ></span>
                </Link>
              );
            })}
          </div>

          <a href="/contact">
            <button className="hidden md:block px-6 py-2 bg-linear-to-r from-blue-500 to-teal-300 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
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

      {
        menuOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              {routes.map((item) => {
                const isActive = pathname === item.route;

                return (
                  <a
                    key={item.id}
                    href={item.route}
                    className={`
              block relative text-lg transition-colors duration-300
              ${isActive
                        ? "text-white font-semibold"
                        : "text-white/80 hover:text-white"
                      }
              group
            `}
                  >
                    {item.nav}

                    {/* Active or hover underline */}
                    <span
                      className={`
                absolute left-0 bottom-[-2px] h-[2px] w-full rounded-full
                bg-white transition-all duration-300
                ${isActive
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                        }
              `}
                    ></span>
                  </a>
                );
              })}

              <a href="/contact/">
                {" "}
                <button className="w-full px-6 py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        )
      }
    </nav >
  );
}
