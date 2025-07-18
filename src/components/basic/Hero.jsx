import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="container-fluid pb-0" id="hero">
      <div className="row align-items-center">
        <div className="col-12 col-lg-5 text-center order-first order-lg-last mb-4 mb-lg-0">
          <img
            src="public/assets/man.png"
            alt="banner"
            className="img-fluid h-75 w-75"
          />
        </div>

        <div className="col-12 col-lg-7 px-4 px-lg-5 d-flex flex-column justify-content-center">
          <p className="fs-5 fw-semibold d-flex align-items-center mb-2">
            <img className="me-2" src="public/assets/dot.png" alt="dot" />
            I AM DESIGNER
          </p>

          <h1 className="fw-bold display-4 m-0">
            Creative Design
          </h1>

          <h1 className="fw-bold display-4 m-0">
            and Web&nbsp;
            <TypeAnimation
              sequence={['Design', 2000, '', 500, 'Solutions', 2000]}
              wrapper="span"
              speed={40}
              className="text-warning fw-bold"
              repeat={Infinity}
            />
          </h1>

          <p className="text-muted py-3">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.
          </p>

          <div className="text-start">
            <a href="#cv" className="btn btn-lg btn-warning fw-bold d-inline-block mb-2">
              Download my CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;