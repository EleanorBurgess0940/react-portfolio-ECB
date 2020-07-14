import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <nav>
      <div class="wrapper">
        <div class="navbar navbar-light bg-light">
          <div id="main-content">
            <a class="navbar-brand nav-link" href="home.html">
              <h2>
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Eleanor C. Burgess
                </Link>
              </h2>
            </a>
          </div>
          <div id="sidebar">
            <ul class="navbar list-group list-group-horizontal">
              <li class="nav-item active">
                <Link
                  to="/about"
                  className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About Me
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/portfolio"
                  className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/portfolio"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Portfolio
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/contact"
                  className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Contact Today
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
