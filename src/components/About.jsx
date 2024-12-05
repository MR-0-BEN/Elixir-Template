import React from "react";
import "./About.css";
import about from "../assets/images/about.jpg";
import { features } from "../assets/data/AboutElixirData";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        {/* first row */}
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title mb">
              <h1 className=" display-4 fw-semibold ">About us</h1>
              <div className="line"></div>
              <p className=" mx-auto">
                We love to craft digital experiences for brands rather than crap
                and more lorem ipsums and do crazy skills
              </p>
            </div>
          </div>
        </div>
        {/* second row */}
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <img src={about} alt="about section image" />
          </div>
          <div className="col-lg-5">
            <h2 className=" fs-1">About Elixir</h2>
            <p className="mt-3 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              hic cupiditate libero?
            </p>
            {features.map((feature) => (
              <div className=" d-flex mb-3 ">
                <div className="icon-box me-4">
                  <i class={feature.icon}></i>
                </div>
                <div>
                  <h5 className=" text-capitalize">{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
