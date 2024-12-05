import React from "react";
import "./Reviews.css";
import { Data } from "../assets/Data/TestimonialsData";
// ... rest of the avatar images


const Reviews = () => {
  return (
    <section id="reviews" className="reviews section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h1 className=" display-4 fw-semibold">Testimonials</h1>
              <div className="line"></div>
              <p className="text-center mx-auto">
                We love to craft digital experiances for brands rather than crap
                and more lorem ipsums and do crazy skills
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-5 gx-4">
          {Data.map((person) => (
            <div className="col-lg-4 col-sm-6 ">
              <div className="review">
                <div className="review-head bg-white theme-shadow position-relative p-4">
                  <div className="text-warning">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-fill"></i>
                  </div>
                  <p>{person.review}</p>
                </div>
                <div className="review-person d-flex mt-4">
                  <img className="rounded-circle" src={person.avatar} alt="" />
                  <div className="ms-3">
                    <h5>{person.name}</h5>
                    <small className=" fw-semibold text-uppercase">
                      {person.job_title}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
