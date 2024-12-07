import React from "react";
import "./Portfolio.css";
import { images } from "../assets/data/OurPortfolioData";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-down" data-aos-delay="150">
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
          {images.map((image, index) => (
            <div key={image.id} className="col-md-4 " data-aos="fade-down" data-aos-delay={150 * (index + 1)}>
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
