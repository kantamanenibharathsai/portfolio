// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

// function ProjectCards(props) {
//   return (
//     <Card className="project-card-view">
//       <Card.Img variant="top" src={props.imgPath} alt="card-img" />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {props.description}
//         </Card.Text>
//         <Button variant="primary" href={props.ghLink} target="_blank">
//           <BsGithub />
//           {props.isBlog ? "Blog" : "GitHub"}
//         </Button>
//         {!props.isBlog && props.demoLink && (
//           <Button
//             variant="primary"
//             href={props.demoLink}
//             target="_blank"
//             style={{ marginLeft: "10px" }}
//           >
//             <CgWebsite /> 
//           </Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }
// export default ProjectCards;
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "../../App.css"; // Don't forget to create this CSS file

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text className="project-description">
          {props.description}
        </Card.Text>
        <div className="mt-auto d-flex justify-content-center">
          {/* <Button variant="primary" href={props.ghLink} target="_blank" className="github-btn">
            <BsGithub /> {props.isBlog ? "Blog" : "GitHub"}
          </Button> */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="ms-3 demo-btn"
            >
              <CgWebsite /> Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;