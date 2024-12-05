import React from "react";
import "./Team.css";
import { teamData } from "../assets/data/TeamData";

const Team = () => {
  return (
    <section id="team" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title">
              <h2 className="display-4 fw-semibold">Team Members</h2>
              <div className="line"></div>
              <p className="mx-auto">
                We love to craft digital experiances for brands rather than crap
                and more lorem ipsums and do crazy skills
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {teamData.map((teamMember) => (
            <div className="col-md-4">
              <div className="team-member image-zoom overflow-hidden position-relative">
                {console.log(teamMember)}
                <div className="image-zoom-wrapper overflow-hidden position-relative">
                  <img src={teamMember.img} alt="" />
                </div>
                <div className="team-member-content position-absolute start-50 translate-middle-x text-center p-4 opacity-0 ">
                  <h4 className="text-white mb-10">{teamMember.name}</h4>
                  <p className="mb-0 text-white">{teamMember.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
