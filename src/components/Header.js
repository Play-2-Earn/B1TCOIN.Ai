// components/Header.js
import React, { useState } from "react";
import logo from "../assets/logo1.png";
import styles from "./Header.module.css"; // Import the CSS Module

const Header = ({ isLandingPage, isMobile }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  if (!isLandingPage) {
    return null; // Only render header on the landing page
  }

  return (
    <div className={styles.header}>
      {" "}
      {/* Apply CSS Module styles */}
      <img src={logo} alt="Logo" style={{ width: "80px", height: "80px" }} />
    </div>
  );
};

export default Header;
