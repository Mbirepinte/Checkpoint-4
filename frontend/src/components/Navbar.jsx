/* import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navBarUser, navBarAdmin } from "../utils/navBarLinks"; */
import "../styles/Navbar.css";

function Navbar() {
  /*   const [navbar, setNavbar] = useState(navBarUser);
  console.log(navbar);
 */
  return (
    <div className="navbar">
      {/*       <ul>
        {navbar.map((item) => (
          <NavLink to={item.link} key={item.id} className="items">
            <li>{item.name}</li>
          </NavLink>
        ))}
      </ul> */}
    </div>
  );
}

export default Navbar;
