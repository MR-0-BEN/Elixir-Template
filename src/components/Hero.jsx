import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero min-vh-100 d-flex align-items-center text-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <h1 className=" text-uppercase fw-semibold display-1 text-white" data-aos="fade-left">
              Welcome to elixir
            </h1>
            <h5
              className="text-white mt-3 mb-4 text-uppercase"
              data-aos="fade-right"
            >
              we are team of talented designers making websites with bootstrap
            </h5>
            <div data-aos="fade-up" data-aos-delay="50">
              <a
                href="#"
                className="btn btn-brand fs-6 rounded-0 text-uppercase me-2 text-white fw-semibold py-2 px-4"
              >
                get started
              </a>
              <a
                href="#"
                className="btn  btn-light rounded-0 text-uppercase ms-2 fw-semibold py-2 px-4"
              >
                our portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
