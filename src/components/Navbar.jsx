import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import the CSS module

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>Green Support</div>
        <div className={styles.hamburgerMenu}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <nav className={isOpen ? styles.navOpen : ""}>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/resources" onClick={() => setOpen(false)}>
                Resources
              </Link>
            </li>
            <li>
              <Link to="/appointments" onClick={() => setOpen(false)}>
                Appointments
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={() => setOpen(false)}>
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
