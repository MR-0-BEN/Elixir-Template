
import React from "react";
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.jpg";
import project6 from "../assets/images/project-6.jpg";
import "./Portfolio.css";

const images = [
  { id: 1, src1: project1, src2: project2 },
  { id: 2, src1: project3, src2: project4 },
  { id: 3, src1: project5, src2: project6 },
];
const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h1 className=" display-4 fw-semibold">Our Portfolio</h1>
              <div className="line"></div>
              <p className="text-center mx-auto">
                We love to craft digital experiances for brands rather than crap
                and more lorem ipsums and do crazy skills
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {images.map((image) => (
            <div key={image.id} className="col-md-4">
              <div className="portfolio-item image-zoom position-relative overflow-hidden ">
                <div className="image-zoom-wrapper position-relative overflow-hidden ">
                  <img src={image.src1} alt="" className="" />
                </div>
                <a
                  data-type="image"
                  href={image.src1}
                  data-fancybox="gallery"
                  className="icon-box text-white position-absolute opacity-0 start-50 translate-middle"
                >
                  <i class="ri-search-line"></i>
                </a>
              </div>
              <div className="portfolio-item image-zoom position-relative overflow-hidden mt-4">
                <div className="image-zoom-wrapper position-relative overflow-hidden ">
                  <img src={image.src2} alt="" className="" />
                </div>
                <a
                  data-type="image"
                  href={image.src2}
                  data-fancybox="gallery"
                  className="icon-box text-white position-absolute opacity-0 start-50 translate-middle"
                >
                  <i class="ri-search-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
