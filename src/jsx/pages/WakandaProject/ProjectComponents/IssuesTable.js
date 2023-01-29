import React, { Fragment } from "react";
import { Row, Col, Card, Table, Badge, ProgressBar } from "react-bootstrap";

import { Link } from "react-router-dom";

const IssuesTable = () => {
  return (
    <Fragment>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Delay in excavation of the septic tanks</td>
                    <td>
                    <Badge variant="danger light">Pending</Badge>
                    </td>
                    <td>12/12/22</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Delayed Memo from the minitry</td>
                    <td>
                      <Badge variant="primary light">Solved</Badge>
                    </td>
                    <td>01/30/23</td>  
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Bearing of concrete mixer failed</td>
                    <td>
                      <Badge variant="primary light">Solved</Badge>
                    </td>
                    <td>2/25/23</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          {/* <!-- /# card --> */}
        </Col>
      </Row>
    </Fragment>
  );
};

export default IssuesTable;
