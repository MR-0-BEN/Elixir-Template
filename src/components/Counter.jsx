import React from "react";
import "./Counter.css";
import {Data} from "../assets/data/CounterData";

const Counter = () => {
  return (
    <section id="counter" className="counter section-padding">
      <div className="container">
        <div className="row g-4 text-center">
          {Data.map((count) => (
            <div className="col-lg-3 col-sm-6">
              <h1 className="text-white display-4">{count.value}</h1>
              <h6 className=" text-uppercase mt-3 mb-0 text-white">
                {count.label}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
