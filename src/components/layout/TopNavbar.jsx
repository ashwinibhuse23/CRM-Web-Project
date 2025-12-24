// src/components/navbar/TopNavbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { navbarMenus } from "../../config/navbarConfig";

export default function TopNavbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation(); // For active link highlighting

  return (
    <div className="w-full shadow-md">
      {/* ================= TOP HEADER ================= */}
      <div className="bg-white flex justify-between items-center px-6 py-3 border-b">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="w-10 h-10 bg-teal-700 text-white flex items-center justify-center rounded-full font-bold shadow-md">
            A
          </div>

          <div>
            <h1 className="font-bold text-lg text-gray-800">ARRAYLOGIC</h1>
            <p className="text-xs text-gray-500">CRM Dashboard</p>
          </div>
        </div>

        {/* User icon */}
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xl hover:bg-gray-300 transition-colors cursor-pointer">
          👤
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="bg-gradient-to-r from-teal-800 to-teal-600 text-white px-6 py-3 flex items-center gap-6 shadow-lg">
        {navbarMenus.map((menu, index) => {
          const Icon = menu.icon;
          const isActive = location.pathname.startsWith(menu.path);

          return menu.dropdown ? (
            <div key={index} className="relative">
              <button
                onClick={() => setOpenMenu(openMenu === index ? null : index)}
                className={`flex items-center gap-1 px-3 py-2 rounded hover:text-yellow-400 transition-colors ${
                  openMenu === index ? "bg-teal-700" : ""
                }`}
              >
                <Icon className="inline-block text-lg" />
                {menu.label} 
                <span
                  className={`ml-1 transition-transform ${
                    openMenu === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▾
                </span>
              </button>

              {openMenu === index && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-52 z-50">
                  {menu.dropdown.map((sub, i) => {
                    const SubIcon = sub.icon;
                    const isSubActive = location.pathname === sub.path;
                    return (
                      <Link
                        key={i}
                        to={sub.path}
                        onClick={() => setOpenMenu(null)}
                        className={`flex items-center gap-2 px-4 py-2 hover:bg-teal-100 transition-colors rounded ${
                          isSubActive ? "bg-teal-200 font-semibold" : ""
                        }`}
                      >
                        {SubIcon && <SubIcon className="inline-block text-lg text-teal-800" />} 
                        {sub.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={index}
              to={menu.path}
              className={`flex items-center gap-1 px-3 py-2 rounded hover:text-yellow-400 transition-colors ${
                isActive ? "bg-teal-700" : ""
              }`}
            >
              <Icon className="inline-block text-lg" />
              {menu.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
