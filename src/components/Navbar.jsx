import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // Dark mode config
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex fixed w-full h-[80px] bg-slate-50 dark:bg-gray-950 dark:text-white justify-center z-50">
      <div className="flex items-center">
        <div className="flex justify-between gap-3 xl:gap-20 text-[18px] xl:text-lg font-sans xl:font-medium uppercase">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline decoration-8 transition-all " : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline decoration-8 transition-all " : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive ? "underline decoration-8 transition-all " : ""
            }
          >
            Work
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline decoration-8 transition-all " : ""
            }
          >
            Contact
          </NavLink>
          {/* Dark mode toggle */}
          <div onClick={toggleTheme} className="cursor-pointer">
            {theme === "dark" ? (
              <img src="/sun.png" width={40} height={40} alt="Light Mode" />
            ) : (
              <img src="/moon.png" width={40} height={40} alt="Dark Mode" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
