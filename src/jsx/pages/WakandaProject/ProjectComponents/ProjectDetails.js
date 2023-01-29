import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

//Images
import back1 from "./../../../../images/back1.jpg";
import small1 from "./../../../../images/profile/small/pic1.jpg";
import small2 from "./../../../../images/profile/small/pic2.jpg";
import small3 from "./../../../../images/profile/small/pic3.jpg";
import small4 from "./../../../../images/profile/small/pic4.jpg";
import small5 from "./../../../../images/profile/small/pic5.jpg";

const ProjectDetails = () => {
  const [selectBtn, setSelectbBtn] = useState("Newest Comment");
  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="row">
            <div className="col-xl-12">
              <div className="card overflow-hidden">
                <div className="company-profile">
                  <img src="https://kwarastate.gov.ng/wp-content/uploads/iih1.jpeg" alt="" />
                </div>
                <div className="card-body">
                  <div className="row border-bottom pb-5">
                    <div className="col-xl-8 col-lg-9">
                      <div>
                        <h4 className="fs-32 font-w700">Ilorin Innovation Hub</h4>
                        
                        <div className="workload-button"></div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-3 info">
                      <div className="kanbanimg1">
                        <span>
                          <i className="fas fa-info-circle me-3"></i>Project Details
                        </span>
                        <Dropdown className="dropdown ms-3">
                          <Dropdown.Toggle as="div" className="btn-link i-false">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12.4999" cy="3.5" r="2.5" fill="#A5A5A5" />
                              <circle cx="12.4999" cy="11.5" r="2.5" fill="#A5A5A5" />
                              <circle cx="12.4999" cy="19.5" r="2.5" fill="#A5A5A5" />
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                            <Dropdown.Item>Delete</Dropdown.Item>
                            <Dropdown.Item>Edit</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="col-xl-3 mt-4 col-sm-6">
                      <div className="d-flex">
                        <span>
                          <i className="far fa-clock scale5 text-primary mt-2 me-3"></i>
                        </span>
                        <div>
                          <h4 className="fs-18 font-w500 text-black">Start date</h4>
                          <span>22/4/22</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 mt-4 col-sm-6">
                      <div className="d-flex">
                        <span>
                          <i className="far fa-clock scale5 text-primary mt-2 me-3"></i>
                        </span>
                        <div>
                          <h4 className="fs-18 font-w500 text-black">End date</h4>
                          <span>21/8/23</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mt-4 col-sm-12">
                      <div className="mb-3">
                        <span className="fs-18 font-w500">Total Progress 60%</span>
                      </div>
                      <div className="progress default-progress1">
                        <div className="progress-bar progress-animated" style={{ width: "40%", height: "14px" }}>
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-description">
                    <span className="fs-18 font-w500 mb-3 d-block">PROJECT DESCRIPTION</span>
                    <p className="fs-18 font-w500">
                      "The Ilorin Innovation Hub is a project aimed at providing a platform for entrepreneurs and businesses to develop and commercialize new ideas and technologies in Ilorin. It will be located in the heart of Ilorin and will provide a range of resources and services to its members, including co-working space, business incubation and acceleration services, mentorship, training and workshops, as well as access to funding and networking opportunities."
                    </p>
                    <span className="fs-18 font-w600 my-4 d-block">
                      Contract sum: 1.6 Billion
                    </span>
              
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectDetails;
