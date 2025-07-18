const MyNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid p-3 mx-4">
        <img src="public/assets/Design.png" alt="logo" />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item mx-3">
              <a className="nav-link text-dark" href="#home">Home</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-dark" href="#about">About</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-dark" href="#about">Services</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-dark" href="#about">Resume</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-dark" href="#about">PortFolio</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-dark" href="#products">Blog</a>
            </li>
            <li className="nav-item d-lg-none mt-2 text-center">
              <a href="#contact" className="btn btn-warning fw-bold w-100">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block me-3">
          <a href="#contact" className="btn btn-lg btn-warning fw-bold">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default MyNavBar;