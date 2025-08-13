import { ArrowBigRight, X } from "lucide-react";
import MyLogo from "../../assets/logo.jpg";
import NAVLINKS from "../../utils/NavLinks/NavLinks";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const sidebarRef = useRef();
  useEffect(() => {
    if (sidebarOpen) {
      //i need animation when mobile bar
      gsap.fromTo(
        sidebarRef.current,
        { width: 0, opacity: 0 },
        {
          width: 256, // Tailwind w-64
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
          clearProps: "width", // reset width after animation so Tailwind works
        }
      );
    } else {
      //i need animation when mobile bar
      gsap.to(sidebarRef.current, {
        width: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [sidebarOpen]);
  //i need animation when mobile bar

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          sidebarOpen ? "" : "hidden"
        }`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        />
        <aside
          ref={sidebarRef}
          className="relative z-50 w-64 bg-white h-full shadow-lg"
        >
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <img
              src={MyLogo}
              alt="Logo"
              className="rounded-full w-10 h-10 object-cover"
            />
            <button onClick={() => setSidebarOpen(false)}>
              <X className="w-6 h-6 cursor-pointer" />
            </button>
          </div>
          <nav className="px-4 py-4 space-y-2">
            {NAVLINKS.map(({ name, path, icon }, index) => (
              <Link
                to={path}
                key={index}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700"
              >
                {icon}
                {name}
              </Link>
            ))}
          </nav>
        </aside>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-[var(--color-dark-bg)] border-r borderColor shadow-sm">
        <div className="h-16 flex items-center justify-center space-x-2 font-bold text-lg">
          <img
            src={MyLogo}
            alt="Logo"
            className="rounded-full w-10 h-10 object-cover"
          />
          <span className="font-bold text-3xl mainDarkModeText">My Todo</span>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          {NAVLINKS.map(({ name, path, icon }, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `flex items-center themeText gap-3 px-3 py-2 rounded-lg  ${
                  isActive ? "active" : ""
                }`
              }
            >
              {icon}
              {name}
            </NavLink>
          ))}
        </nav>
        <div className=" borderColor px-3 py-2">
          <div className="flex items-center gap-3 px-3 py-10 rounded-2xl bg-[var(--color-light-card-bg)] dark:bg-[var(--color-dark-card-bg)] ">
            <span>
              <img
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </span>
            <div className="flex flex-col items-center gap-2">
              <h2>Premium User</h2>
              <span className="text-center cursor-pointer">
                <ArrowBigRight className="mainDarkModeText" fill="bg-[var(--color-light-accent-vibrant-cyan)] dark:bg-[var(--color-dark-accent-blue-purple)]" size={20} />
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
