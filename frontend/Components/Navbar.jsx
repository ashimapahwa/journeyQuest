import React from "react";

function handlePackage() {
  document.getElementById("packages").scrollIntoView("smooth");
}

function handleHome() {
  document.getElementById("home").scrollIntoView("smooth");
}

function handleAbout() {
  document.getElementById("about").scrollIntoView("smooth");
}

function handleContact() {
  document.getElementById("contact").scrollIntoView("smooth");
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid">
        <div>
          <a className="navbar-brand" href="_">
            JOURNEY QUEST
          </a>
        </div>
        <div></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#home"
                onClick={handleHome}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#packages" onClick={handlePackage}>
                Packages
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleAbout}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleContact}>
                Contact
              </a>
            </li>
          </ul>
          <form className="d-flex ml-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
