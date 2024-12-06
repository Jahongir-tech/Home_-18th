import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import {LINKS} from "../../static/index"


const Header = () => {
  const { pathname } = useLocation();
  return (
    <header>
      {/* <div className="container"> */}
        <nav className="flex gap-4 p-4 bg-blue-500">
          {LINKS?.map((link) => (
            <NavLink
              key={link.id}
              className="text-white text-lg flex items-center justify-around gap-2"
              to={link.path}
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </nav>
      {/* </div> */}
    </header>
  );
}

export default Header