import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5 pb-3">
      <div className="container">
        <div className="row text-md-start text-center p-5">

          <div className="col-md-3 mb-4">
            <img src="assets\designlight.png" alt="CreDesign Logo" style={{ height: "40px" }} />
            <p className="small mt-3">
              At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium volup deleniti atque corrupti quos dolores et molestias excepturi sint occaecati
            </p>
            <p className="fw-semibold mt-3">credesign@gmail.com</p>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Explore Link</h5>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-white text-decoration-none d-block mb-1">About</a></li>
              <li><a href="#" className="text-white text-decoration-none d-block mb-1">Resume</a></li>
              <li><a href="#" className="text-white text-decoration-none d-block mb-1">Portfolio</a></li>
              <li><a href="#" className="text-white text-decoration-none d-block">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">My Services</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-1">UI/UX Design</li>
              <li className="mb-1">Mobile App</li>
              <li className="mb-1">Graphic Design</li>
              <li>Web Developer</li>
            </ul>
          </div>

          {/* Social + Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Follow me</h5>
            <div className="d-flex gap-2 my-3 justify-content-center justify-content-md-start">
              <a href="#" className="btn btn-warning text-white rounded"><FaFacebookF /></a>
              <a href="#" className="btn btn-warning text-white rounded"><FaTwitter /></a>
              <a href="#" className="btn btn-warning text-white rounded"><FaDribbble /></a>
              <a href="#" className="btn btn-warning text-white rounded"><FaBehance /></a>
            </div>
            <p className="mb-1"><FaMapMarkerAlt className="me-2 text-warning" />202 Dog Hill Lane Beloit, KS 67420</p>
            <p><FaPhoneAlt className="me-2 text-warning" />1-800-915-6270</p>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="row text-center text-md-between">
          <div className="col-md-6 small">
            All rights reserved © 2023 Credesign
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end gap-3 small">
            <a href="#" className="text-white text-decoration-none">Terms & Condition</a>
            <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;