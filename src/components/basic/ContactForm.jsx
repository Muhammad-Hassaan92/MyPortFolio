import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <form>
            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <input type="text" className="form-control border border-warning-subtle" placeholder="Your Name" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control border border-warning-subtle" placeholder="Your Email" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <input type="tel" className="form-control border border-warning-subtle" placeholder="Your Phone" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control border border-warning-subtle" placeholder="Subject" />
              </div>
            </div>

            <div className="mb-3">
              <textarea rows="5" className="form-control border border-warning-subtle" placeholder="Message"></textarea>
            </div>

            <button type="submit" className="btn btn-warning text-white px-4 rounded-2">
              Send Me Message
            </button>
          </form>
        </div>

        <div className="col-lg-4 pt-4 pt-lg-0">
          <div className="d-flex mb-4">
            <div className="bg-warning-subtle p-3 rounded-3 me-3">
              <FaMapMarkerAlt size={20} className="text-warning" />
            </div>
            <div>
              <p className="fw-bold m-0">Address</p>
              <p className="m-0">202 Dog Hill Lane Beloit, KS 67420</p>
            </div>
          </div>

          <div className="d-flex mb-4">
            <div className="bg-warning-subtle p-3 rounded-3 me-3">
              <FaPhoneAlt size={20} className="text-warning" />
            </div>
            <div>
              <p className="fw-bold m-0">Phone</p>
              <p className="m-0">+01985634755</p>
            </div>
          </div>

          <div className="d-flex">
            <div className="bg-warning-subtle p-3 rounded-3 me-3">
              <FaEnvelope size={20} className="text-warning" />
            </div>
            <div>
              <p className="fw-bold m-0">Email</p>
              <p className="m-0">credesign@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
