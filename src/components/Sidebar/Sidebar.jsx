import { X } from "lucide-react";
import MyLogo from "../../assets/logo.jpg";
import NAVLINKS from "../../utils/NavLinks/NavLinks";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const  sidebarRef = useRef();
 useEffect(() => {
    if (sidebarOpen) {//i need animation when mobile bar
      gsap.fromTo(
        sidebarRef.current,
        { width: 0, opacity: 0 },
        {
          width: 256, // Tailwind w-64
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
          clearProps: "width" // reset width after animation so Tailwind works
        }
      );
    } else {//i need animation when mobile bar
      gsap.to(sidebarRef.current, {
        width: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in"
      });
    }
  }, [sidebarOpen]);
    //i need animation when mobile bar 


  return (
    <>
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? "" : "hidden"}`}>
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        />
        <aside ref={sidebarRef} className="relative z-50 w-64 bg-white h-full shadow-lg">
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
              <a
                key={index}
                href={path}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700"
              >
                {icon}
                {name}
              </a>
            ))}
          </nav>
        </aside>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white shadow-sm">
        <div className="h-16 flex items-center justify-center space-x-2 font-bold text-lg">
          <img
            src={MyLogo}
            alt="Logo"
            className="rounded-full w-10 h-10 object-cover"
          />
          <span className="font-bold text-3xl text-blue-500">My Todo</span>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          {NAVLINKS.map(({ name, path, icon }, index) => (
            <a
              key={index}
              href={path}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700"
            >
              {icon}
              {name}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
