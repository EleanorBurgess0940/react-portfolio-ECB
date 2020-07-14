import React from "react";
import "./style.css";

function Header() {
  return (
    <nav>
      <div class="wrapper">
        <div class="navbar navbar-light bg-light">
          <div id="main-content">
            <a class="navbar-brand nav-link" href="home.html">
              <h2>Eleanor C. Burgess</h2>
            </a>
          </div>
          <div id="sidebar">
            <ul class="navbar list-group list-group-horizontal">
              <li class="nav-item active">
                <a class="nav-link" href="aboutMe.html">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="portfolio.html">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">
                  Contact Today
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
