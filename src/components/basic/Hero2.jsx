const Hero2 = () => {
  return (
    <section className="container-fluid py-5 bg-light">
      <div className="row align-items-center">
        <div className="col-md-6 text-lg-end text-center">
          <img
            src="public/assets/bgman.png"
            alt="Profile"
            className="img-fluid rounded h-75 w-75"
          />
        </div>

        <div className="col-md-6 px-5">
          <p className="fw-semibold d-flex align-items-center">
            <img src="public/assets/dot.png" alt="dot" className="me-2" width="20" height="20" />
            About Me
          </p>

          <h1 className="display-5 fw-bold">I Can Design Anything You Want</h1>

          <p className="text-secondary py-3">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis.
          </p>

          <div className="row">
            <div className="col-sm-6">
              <div className="d-flex align-items-center mb-3">
                <img src="public/assets/tick.png" alt="tick" className="me-3" width="30" />
                <div>
                  <h5 className="mb-0 fw-bold">24+</h5>
                  <p className="mb-0">Complete Projects</p>
                </div>
              </div>

              <p>
                <i className="fa-regular fa-square-check text-warning me-2" />
                Work simple and clean design
              </p>
              <p>
                <i className="fa-regular fa-square-check text-warning me-2" />
                New idea and user-friendly design
              </p>
            </div>

            <div className="col-sm-6">
              <div className="d-flex align-items-center mb-3">
                <img src="public/assets/tick.png" alt="tick" className="me-3" width="30" />
                <div>
                  <h5 className="mb-0 fw-bold">1+</h5>
                  <p className="mb-0">Year of Experience</p>
                </div>
              </div>

              <p>
                <i className="fa-regular fa-square-check text-warning me-2" />
                Web Design Full Stack
              </p>
              <p>
                <i className="fa-regular fa-square-check text-warning me-2" />
                Unlimited Revisions
              </p>
            </div>
          </div>

          <a href="#cv" className="btn btn-warning btn-lg mt-4 fw-bold">
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
