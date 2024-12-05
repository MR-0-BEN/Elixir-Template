import React from "react";
import "./Counter.css";

const Counter = () => {
  return (
    <section id="counter" className="counter section-padding">
      <div className="container">
        <div className="row g-4 text-center">
          <div className="col-lg-3 col-sm-6">
            <h1 className="text-white display-4">90,000+</h1>
            <h6 className=" text-uppercase mt-3 mb-0 text-white">Total Downloads</h6>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h1 className="text-white display-4">58K+</h1>
            <h6 className=" text-uppercase mt-3 mb-0 text-white">Trusted clients</h6>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h1 className="text-white display-4">5M+</h1>
            <h6 className=" text-uppercase mt-3 mb-0 text-white" >themes designed</h6>
          </div>
          <div className="col-lg-3 col-sm-6 ">
            <h1 className="text-white display-4">100+</h1>
            <h6 className=" text-uppercase mt-3 mb-0 text-white">team members</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
