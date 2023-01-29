import React, { Fragment } from "react";
import { Row, Col, Card, Table, Badge, Carousel } from "react-bootstrap";

import { Link } from "react-router-dom";

import small1 from "./../../../../images/profile/small/pic1.jpg";
import img1 from "./../../../../images/big/image_new1.jpg";
import img2 from "./../../../../images/big/image_new3.jpg";
import img3 from "./../../../../images/big/image_new2.jpg";

const carousel1 = [img1, img2, img3];

const StatusUpdateTable = () => {
  return (
    <Fragment>
      <Row>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="post-details">
                <h3 className="mb-2 text-black">Impact of inflation on project funding </h3>

                <ul className="mb-4 post-meta d-flex flex-wrap">
                  <li className="post-author me-3">By Project manager</li>
                  <li className="post-date me-3">
                    <i className="far fa-calendar-plus me-2" />
                    18/11/2022
                  </li>
                  <li className="post-comment">
                    <i className="far fa-comment me-2" /> 2
                  </li>
                </ul>

                <Col xl={12}>
                  <Card>
                    <Card.Body className="p-4">
                      <Carousel>
                        {carousel1.map((carousel, i) => (
                          <Carousel.Item key={i}>
                            <img src={carousel} className="d-block w-100" alt={`Slide ${i + 1}`} />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </Card.Body>
                  </Card>
                </Col>

                <p>
                Work is on hold here because of funds as well. This is largely due to inflation, alignment additional works and the value of the valuations that have been processed by the consultants. 
                </p>
                <p>
                The work at Housing has been put on hold due to a lack of funds. This is primarily due to the impact of inflation on the project budget, as well as the need to align the cost of the additional works with the value assessed during the valuation process. The consultants involved in the valuation process have determined the current value of the property and additional works, but the cost of these works has risen due to inflation, leading to the need for additional funding. This has resulted in the work being put on hold until sufficient funds are secured to continue with the project. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="post-details">
                <h3 className="mb-2 text-black">Valuation</h3>

                <ul className="mb-4 post-meta d-flex flex-wrap">
                  <li className="post-author me-3">Director, Ministry of ICT</li>
                  <li className="post-date me-3">
                    <i className="far fa-calendar-plus me-2" />
                    11/1/2023
                  </li>
                  <li className="post-comment">
                    <i className="far fa-comment me-2" /> 3
                  </li>
                </ul>

                <Col xl={12}>
                  <Card>
                    <Card.Body className="p-4">
                      <Carousel>
                        {carousel1.map((carousel, i) => (
                          <Carousel.Item key={i}>
                            <img src={carousel} className="d-block w-100" alt={`Slide ${i + 1}`} />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </Card.Body>
                  </Card>
                </Col>

                <p>
                There’s an ongoing valuation (9m) and evaluation of the additional works (Floor and Glassblock for 60m) currently at Housing. 
                </p>
                <p>
                A valuation process is currently underway at Housing, which aims to assess the value of the property at 9 million. In addition to this, there is also an evaluation of additional works, specifically the installation of flooring and glassblocks, which has an estimated cost of 60 million. The goal of this evaluation is to determine the value added by these additional works to the overall property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Fragment>
  );
};

export default StatusUpdateTable;
