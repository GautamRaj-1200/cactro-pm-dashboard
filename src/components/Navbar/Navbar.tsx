import { useEffect, useRef, useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false);
  const navbarRef = useRef<HTMLUListElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };
  console.log(navbarVisible);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target as Node)
    ) {
      setNavbarVisible(false);
    }
  };
  const handleLinkClick = () => {
    setNavbarVisible(false);
  };

  useEffect(() => {
    if (navbarVisible)
      document.addEventListener("mousedown", handleClickOutside);
    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarVisible]);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar__logo">
            <h1>
              <span>H</span>OURS
            </h1>
          </div>
          <ul
            ref={navbarRef}
            className={`navbar__list ${navbarVisible ? "active" : ""}`}
          >
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                Dashboard
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                Team
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                Clients
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                {" "}
                Time
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link" onClick={handleLinkClick}>
                {" "}
                Reports
              </a>
            </li>
          </ul>
          <div className="navbar__profile">
            <div className="navbar__profile--notification">
              <i className="fa-regular fa-bell"></i>
            </div>
            <div className="navbar__profile--user">
              <div className="navbar__profile--user--img--container">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="navbar__profile--user--img"
                />
              </div>
              <p className="navbar__profile--user--name">Mario</p>
            </div>
          </div>
          <div
            onClick={toggleNavbar}
            className="navbar__hamburger"
            ref={hamburgerRef}
          >
            <div
              className={`navbar__hamburger-bar navbar__hamburger-bar1 ${
                navbarVisible ? "active" : ""
              }`}
            ></div>
            <div
              className={`navbar__hamburger-bar navbar__hamburger-bar2 ${
                navbarVisible ? "active" : ""
              }`}
            ></div>
            <div
              className={`navbar__hamburger-bar navbar__hamburger-bar3 ${
                navbarVisible ? "active" : ""
              }`}
            ></div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
