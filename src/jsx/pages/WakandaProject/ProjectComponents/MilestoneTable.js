import React, { Fragment } from "react";
import { Row, Col, Card, Table, Badge, ProgressBar } from "react-bootstrap";

import { Link } from "react-router-dom";

const MilestoneTable = () => {
  return (
    <Fragment>
      <Row>
        <Card className="p-4 shadow">
          <div className="d-flex justify-content-between">
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="d-flex">
                <div>
                  <h4 className="fs-18 font-w500 text-black">Wiring and lighting</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="d-flex">
                <div>
                  <Badge variant="success">In progress</Badge>
                </div>
              </div>
            </div>
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="d-flex">
                <span>
                  <i className="far fa-clock scale5 text-primary mt-2 me-3"></i>
                </span>
                <div>
                  <h4 className="fs-18 font-w500 text-black">Start date - Due date</h4>
                  <span>20/11/23-29/11/25</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="mb-3">
                <span className="fs-18 font-w500">Total Progress 50%</span>
              </div>
              <div className="mb-3">
                <ProgressBar variant="success" now="50" />
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-4 shadow">
          <div className="d-flex justify-content-between">
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="d-flex">
                <div>
                  <h4 className="fs-18 font-w500 text-black">Tiling</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="d-flex">
                <div>
                  <Badge variant="danger">Behind schedule</Badge>
                </div>
              </div>
            </div>
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="d-flex">
                <span>
                  <i className="far fa-clock scale5 text-primary mt-2 me-3"></i>
                </span>
                <div>
                  <h4 className="fs-18 font-w500 text-black">Start date - Due date</h4>
                  <span>12/12/22-1/01/23</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="mb-3">
                <span className="fs-18 font-w500">Total Progress 25%</span>
              </div>
              <div className="mb-3">
                <ProgressBar variant="danger" now="25" />
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-4 shadow">
          <div className="d-flex justify-content-between">
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="d-flex">
                <div>
                  <h4 className="fs-18 font-w500 text-black">Colums</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="d-flex">
                <div>
                  <Badge variant="success">In progress</Badge>
                </div>
              </div>
            </div>
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="d-flex">
                <span>
                  <i className="far fa-clock scale5 text-primary mt-2 me-3"></i>
                </span>
                <div>
                  <h4 className="fs-18 font-w500 text-black">Start date - Due date</h4>
                  <span>11/10/22-10/11/22</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="mb-3">
                <span className="fs-18 font-w500">Total Progress 95%</span>
              </div>
              <div className="mb-3">
                <ProgressBar variant="success" now="95" />
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-4 shadow">
          <div className="d-flex justify-content-between">
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="d-flex">
                <div>
                  <h4 className="fs-18 font-w500 text-black">Foundation</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="d-flex">
                <div>
                  <Badge variant="success">Done</Badge>
                </div>
              </div>
            </div>
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="d-flex">
                <span>
                  <i className="far fa-clock scale5 text-primary mt-2 me-3"></i>
                </span>
                <div>
                  <h4 className="fs-18 font-w500 text-black">Start date - Due date</h4>
                  <span>20/8/22-20/10/22</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 mt-4 col-sm-6">
              <div className="mb-3">
                <span className="fs-18 font-w500">Total Progress 100%</span>
              </div>
              <div className="mb-3">
                <ProgressBar variant="success" now="100" />
              </div>
            </div>
          </div>
        </Card>
      </Row>
    </Fragment>
  );
};

export default MilestoneTable;
