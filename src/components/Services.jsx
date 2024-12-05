import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section id="services" className="section-padding border-top">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title">
              <h2 className="display-4 fw-semibold">Awesome Services</h2>
              <div className="line"></div>
              <p className="mx-auto">
                We love to craft digital experiances for brands rather than crap
                and more lorem ipsums and do crazy skills
              </p>
            </div>
          </div>
        </div>
        <div className="row text-center g-4 ">
          <div className="col-lg-4 col-sm-6 ">
            <div className="service position-relative z-2 overflow-hidden  theme-shadow p-lg-5 p-4">
              <div className="icon-box">
                <i className="ri-stack-fill"></i>
              </div>
              <h5 className="mt-4 mb-3 text">UX Design</h5>
              <p hover:text-white>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
                Dignissimos excepturi eveniet.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 ">
            <div className="service position-relative z-2 overflow-hidden  theme-shadow p-lg-5 p-4">
              <div className="icon-box">
                <i class="ri-pen-nib-fill"></i>
              </div>
              <h5 className="mt-4 mb-3 text">UI Design</h5>
              <p hover:text-white>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
                Dignissimos excepturi eveniet.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 ">
            <div className="service position-relative z-2 overflow-hidden  theme-shadow p-lg-5 p-4">
              <div className="icon-box">
                <i class="ri-ruler-2-fill"></i>
              </div>
              <h5 className="mt-4 mb-3 text">logo Design</h5>
              <p hover:text-white>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
                Dignissimos excepturi eveniet.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 ">
            <div className="service position-relative z-2 overflow-hidden  theme-shadow p-lg-5 p-4">
              <div className="icon-box">
                <i class="ri-line-chart-fill"></i>
              </div>
              <h5 className="mt-4 mb-3 text">Digital Marketing</h5>
              <p hover:text-white>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
                Dignissimos excepturi eveniet.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 ">
            <div className="service position-relative z-2 overflow-hidden  theme-shadow p-lg-5 p-4">
              <div className="icon-box">
                <i class="ri-openai-line"></i>
              </div>
              <h5 className="mt-4 mb-3 text">Machine Learning</h5>
              <p hover:text-white>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
                Dignissimos excepturi eveniet.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 ">
            <div className="service position-relative z-2 overflow-hidden  theme-shadow p-lg-5 p-4">
              <div className="icon-box">
                <i class="ri-pages-fill"></i>
              </div>
              <h5 className="mt-4 mb-3 text">Web Development</h5>
              <p hover:text-white>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
                Dignissimos excepturi eveniet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
