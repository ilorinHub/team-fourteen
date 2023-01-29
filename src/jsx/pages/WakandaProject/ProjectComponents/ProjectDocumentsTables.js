import React, { Fragment } from "react";
import { Row, Col, Card, Table, Badge, ProgressBar } from "react-bootstrap";

import { Link } from "react-router-dom";

const ProjectDocumentsTable = () => {
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
                    <th>File</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Update plan from the architect</td>
                    <td>qwertyuiop.dwg</td>
                    <td>1/02/22</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Site engineer’s report</td>
                    <td>ilorin_4_month.pdf</td>
                    <td>1/02/23</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>PDU’s report</td>
                    <td>report.pdf</td>
                    <td>22/02/23</td>
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

export default ProjectDocumentsTable;
