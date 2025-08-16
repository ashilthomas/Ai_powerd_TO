import React, { useEffect, useRef } from "react";
import { ArrowBigRight, X } from "lucide-react";
import MyLogo from "../../assets/logo.jpg";
import userAvatar from "../../assets/my.png";
import NAVLINKS from "../../utils/NavLinks/NavLinks";
import { gsap } from "gsap";
import { Link, NavLink } from "react-router-dom";

const Sidebar = React.memo(function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const sidebarRef = useRef();
  const animationRef = useRef(null);
  
  useEffect(() => {
    // Kill any existing animation to prevent conflicts
    if (animationRef.current) {
      animationRef.current.kill();
    }
    
    if (sidebarOpen) {
      // Create a new animation and store the reference
      animationRef.current = gsap.fromTo(
        sidebarRef.current,
        { width: 0, opacity: 0, xPercent: -100 }, // Add transform instead of just width for better performance
        {
          width: 256, // Tailwind w-64
          opacity: 1,
          xPercent: 0,
          duration: 0.4,
          ease: "power3.out",
          clearProps: "width", // reset width after animation so Tailwind works
          onComplete: () => {
            // Clean up animation reference when done
            animationRef.current = null;
          }
        }
      );
    } else if (sidebarRef.current) { // Check if ref exists
      // Create a new animation and store the reference
      animationRef.current = gsap.to(sidebarRef.current, {
        width: 0,
        opacity: 0,
        xPercent: -100, // Add transform for better performance
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => {
          // Clean up animation reference when done
          animationRef.current = null;
        }
      });
    }
    
    // Cleanup function to kill animation if component unmounts during animation
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [sidebarOpen]);

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
                src={userAvatar}
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
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
});

export default Sidebar;
