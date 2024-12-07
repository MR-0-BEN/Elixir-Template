import React from "react";
import "./Blog.css";
import { BlogData } from "../assets/data/BlogData";
import image from "../assets/images/blog-post-1.jpg";

const Blog = () => {
  return (
    <section className="section-padding" id="blog">
      <div className="container">
        <div className="row">
          <div
            className="col-12 text-center"
            data-aos="fade-down"
            data-aos-delay="150 "
          >
            <div className="section-title">
              <h2 className="display-4 fw-semibold ">Blog</h2>
              <div className="line "></div>
              <p className="mx-auto ">
                We love to craft digital experiances for brands rather than crap
                and more lorem ipsums and do crazy skills
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {BlogData.map((Blog, index) => (
            <div
              key={index}
              className="col-md-4"
              data-aos="fade-down"
              data-aos-delay={150 * (index + 1)}
            >
              <div className="blog-post image-zoom overflow-hidden">
                <div className="image-zoom-wrapper overflow-hidden">
                  <img src={Blog.image} alt="" />
                </div>
                <div>
                  <h5 className="mt-4">{Blog.title}</h5>
                  <p>{Blog.description}</p>
                  <a href={Blog.link}>Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
