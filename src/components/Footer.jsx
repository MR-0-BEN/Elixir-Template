import React from "react";
import "./Footer.css";
import { logoSection, sections, contact } from "../assets/data/FooterData";

const Footer = () => {
  return (
    <footer className="bg-dark ">
      <div className="footer-top ">
        <div className="container">
          <div className="row gy-5">
            {/* Render Logo Section */}
            {logoSection.map((section, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <a href="#">
                  <img src={section.content.logo} alt="Logo" />
                </a>
                <div className="line align-self-start"></div>
                <p>{section.content.description}</p>
                <div className="social-icons">
                  {section.content.socialIcons.map((icon, idx) => (
                    <a key={idx} href={icon.link}>
                      <i className={icon.iconClass}></i>
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Render Other Sections */}
            {sections.map((section, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <h5 className="mb-0 text-white">{section.title}</h5>
                <div className="line"></div>
                <ul className="">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Render Contact Section */}
            <div className="col-lg-3 col-sm-6">
              <h5 className="mb-0 text-white">{contact.title}</h5>
              <div className="line"></div>
              <ul>
                {contact.items.map((item, idx) => {
                  if (typeof item === "string") {
                    return (
                      <li className="" key={idx}>
                        {item}
                      </li>
                    );
                  }
                  if (item.type === "phone") {
                    return (
                      <li key={idx}>
                        <a href={`tel:${item.value}`}>{item.value}</a>
                      </li>
                    );
                  }
                  if (item.type === "email") {
                    return (
                      <li key={idx}>
                        <a href={`mailto:${item.value}`}>{item.value}</a>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom ">
        <div className="container">
          <div className="row justify-content-between g-4 ">
            <div className="col-auto">
              <p mb-0>© Copyright Elixir. All Rights Reserved</p>
            </div>
            <div className="col-auto">
              <p mb-0>
                Made with 
                <i class="ri-heart-fill mx-1"></i>
                By <a href="https://github.com/MR-0-BEN"> MR.BeN</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
