import './modules/Navbar.module.css';
import React from 'react';
import logoFwt from './images/logo.png';
import logoLight from './images/logoLightNavbar.png';
import logoDark from './images/logo_dark.png'
import change_color from './scripts/change_back';
// import change_color from './scripts/change_back.ts';
function NavbarPage() {
  return (
    <React.StrictMode>
      <div id="navbarPage">
        <img id='logo_navbar_team' src={logoFwt} alt="" />
        <img
          id="icon_theme_navbar"
          onClick={change_color}
          src={logoLight}
          alt=""
        />
        <img
          id="icon_theme_navbar_dark"
          
          src={logoDark}
          alt=""
        />
      </div>
    </React.StrictMode>
  );
}
export default NavbarPage;
