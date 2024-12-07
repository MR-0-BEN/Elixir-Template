import React from "react";
import "./services.css";
import { services } from "../assets/data/AwesomeServicesData";

const Services = () => {
  return (
    <section id="services" className="section-padding border-top">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
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
          {services.map((service, index) => (
            <div className="col-lg-4 col-sm-6 " key={index} data-aos="fade-down" data-aos-delay={150 * (index + 1)}>
              <div className="service position-relative z-2 overflow-hidden  theme-shadow p-lg-5 p-4">
                <div className="icon-box">
                  <i className={service.icon}></i>
                </div>
                <h5 className="mt-4 mb-3 text">{service.title}</h5>
                <p hover:text-white>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
