import { Card, Nav, Tab } from "react-bootstrap";

import StatusUpdateTable from "./ProjectComponents/StatusUpdateTable.js";
import MilestoneTable from "./ProjectComponents/MilestoneTable";
import IssuesTable from "./ProjectComponents/IssuesTable";
import Transactions from "./ProjectComponents/Transactions";
import ProjectDetails from "./ProjectComponents/ProjectDetails";
import ProjectDocumentsTable from "./ProjectComponents/ProjectDocumentsTables.js";

export const ProjectContent = () => {
  return (
    <>
      {Array.from({ length: 3 }, (v, i) => i).map((item) => (
        <Card.Body key={item}>
          <p>Task Title</p>
          <span>Status</span>
        </Card.Body>
      ))}
    </>
  );
};

const Projects = () => {
  const tabData = [
    {
      name: "Milestone",
      icon: "calendar",
      component: MilestoneTable,
    },
    {
      name: "Status Update",
      icon: "bullhorn",
      component: StatusUpdateTable,
    },
    {
      name: "Transactions",
      icon: "money",
      component: Transactions,
    },
    {
      name: "Issues",
      icon: "bell",
      component: IssuesTable,
    },
    {
      name: "Documents",
      icon: "file",
      component: ProjectDocumentsTable,
    },
  ];

  return (
    <div>
      <ProjectDetails />

      <Card className="pt-4">
        <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
          <Nav as="ul" className="custom-tab-1">
            {tabData.map((data, i) => (
              <Nav.Item as="li" key={i}>
                <Nav.Link eventKey={data.name.toLowerCase()}>
                  <i className={`la la-${data.icon} me-2`} />
                  {data.name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Tab.Content className="pt-4">
            {tabData.map((data, i) => (
              <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                <Card.Body>{data.component ? <data.component /> : <p>{data.content}</p>}</Card.Body>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Card>
    </div>
  );
};

export default Projects;
