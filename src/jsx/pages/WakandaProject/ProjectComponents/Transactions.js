import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";

import { Link } from "react-router-dom";

const IssuesTable = () => {
  return (
    <Fragment>
      <Row>
        <div className="col-12">
          <div className="card">
            <div className="card-header border-0 pb-0"></div>
            <div className="card-body">
              <PerfectScrollbar
                style={{ height: "370px" }}
                id="DZ_W_TimeLine"
                className="widget-timeline dlab-scroll height370 ps ps--active-y"
              >
                <ul className="timeline">
                  
                  <li>
                    <div className="timeline-badge danger"></div>
                    <Link className="timeline-panel text-muted" to="/widget-basic">
                      <span>2/02/23</span>
                      <h6 className="mb-0">
                        Extra funding <strong className="text-warning">N50 Million</strong>
                      </h6>
                      <p className="mb-0">Used for the Automatic doors H.E requested for.</p>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge success"></div>
                    <Link className="timeline-panel text-muted" to="/widget-basic">
                      <span>1/01/23</span>
                      <h6 className="mb-0">Valuation 2 (15%)<strong className="text-warning">N180 Million</strong></h6>
                      
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge info"></div>
                    <Link className="timeline-panel text-muted" to="/widget-basic">
                      <span>22//12/22</span>
                      <h6 className="mb-0">
                      Valuation 1 (10%) <strong className="text-info">160 Million</strong>
                      </h6>
                      <p className="mb-0">This was mainly used for the procurement of doors</p>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge primary"></div>
                    <Link className="timeline-panel text-muted" to="/widget-basic">
                      <span>12/11/22</span>
                      <h6 className="mb-0">
                      Mobilization(30%) <strong className="text-primary">N480 Million</strong>.
                      </h6>
                    </Link>
                  </li>
                </ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </Row>
    </Fragment>
  );
};

export default IssuesTable;
