import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navBarUser, navBarAdmin, navBarSignIn } from "../utils/navBarLinks";
import { authContext } from "../context/AuthContext";

import "../styles/Navbar.css";

function Navbar() {
  const [navbar, setNavbar] = useState([]);

  const { auth, logout } = useContext(authContext);

  const handleLogout = (id) => {
    if (id === 4) {
      logout();
    }
  };

  useEffect(() => {
    if (auth.data) {
      switch (auth.data.role) {
        case 2:
          return setNavbar(navBarAdmin);
        case 1:
          return setNavbar(navBarUser);
        default:
          return setNavbar(navBarSignIn);
      }
    } else {
      return setNavbar(navBarSignIn);
    }
  }, [auth]);

  return (
    <div className="navbar">
      <ul>
        {navbar.map((item) => (
          <NavLink
            to={item.link}
            key={item.id}
            className="items"
            onClick={() => handleLogout(item.id)}
          >
            <li>{item.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
