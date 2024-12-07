import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact section-padding position-relative z-2 bg-light"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-12 text-center"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <div className="section-title">
              <h2 className="display-4 fw-semibold text-white">Get in touch</h2>
              <div className="line bg-white"></div>
              <p className="mx-auto text-white">
                We love to craft digital experiances for brands rather than crap
                and more lorem ipsums and do crazy skills
              </p>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center "
          data-aos="fade-down"
          data-aos-delay="250"
        >
          <div className="col-lg-8">
            <form
              action="#"
              className="row g-3 p-lg-5 p-4 bg-white theme-shadow"
            >
              <div className="form-group col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First name"
                  name=""
                  id=""
                />
              </div>
              <div className="form-group col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last name"
                  name=""
                  id=""
                />
              </div>
              <div className="form-group col-lg-12">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email address"
                  name=""
                  id=""
                />
              </div>
              <div className="form-group col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter subject"
                  name=""
                  id=""
                />
              </div>
              <div className="form-group co-lg-12">
                <textarea
                  className="form-control"
                  placeholder="Enter Message"
                  name="message"
                  id=""
                  rows="5"
                ></textarea>
              </div>
              <div className="form-group co-lg-12 d-grid">
                <button
                  type="submit"
                  className=" text-uppercase text-white btn btn-brand fw-semibold rounded-0 p-2"
                >
                  send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
