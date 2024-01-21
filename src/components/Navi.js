import React from "react";
import { Container, Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
// import logo from "./img/me-logo.png";
import { Modal, Button, ButtonToolbar } from "rsuite";
import Projects from "./Projects";
import Skills from "./Skills";
// import Resume, { ResumeButton } from "./Resume/Resume";
import ResumeModal from "./Resume/ResumeModal";
import { EmailIcon } from "./Contacts/SocialMedia";

const Navi = () => (
  <Container>
    <Navbar>
      <Navbar.Brand href="#">
        <span
          className="navbar-brand"
          style={{ fontFamily: "cursive", fontWeight: "bold" }}
        >
          SATYA
        </span>
      </Navbar.Brand>
      <Nav>
        <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
        <Nav.Menu title="More">
          <Nav.Item href="#projects">
            <ModalProject />
          </Nav.Item>
          <Nav.Item>
            {/* <ModalResume /> */}
            <ResumeModal />
          </Nav.Item>
          <Nav.Item>
            <ModalSkills />
          </Nav.Item>
          <Nav.Menu title="Contact">
            <Nav.Item>
              <ModelContactEmail />
            </Nav.Item>
            <Nav.Item>
              <ModelContactPhone />
            </Nav.Item>
          </Nav.Menu>
        </Nav.Menu>
      </Nav>
      {/* <Nav pullRight>
      <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
    </Nav> */}
    </Navbar>
  </Container>
);

// Contacat Email Modal
const ModelContactEmail = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ButtonToolbar>
        <p
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
          onClick={handleOpen}
        >
          Via email
        </p>
        {/* <Button onClick={handleOpen}> Open</Button> */}
      </ButtonToolbar>

      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Email me:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmailIcon />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// Contact Phone Modal
const ModelContactPhone = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ButtonToolbar>
        <p
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
          onClick={handleOpen}
        >
          Via phone
        </p>
      </ButtonToolbar>

      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Contact me on Mobile no:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <a href="tel:+917255804817">+91-7255804817</a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// Project Modal
const ModalProject = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ButtonToolbar>
        <p
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
          onClick={handleOpen}
        >
          Projects
        </p>
      </ButtonToolbar>

      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Projects:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Projects />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// Resume Modal
// const ModalResume = () => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   return (
//     <>
//       <ButtonToolbar>
//         <p
//           style={{ paddingTop: "10px", paddingBottom: "10px" }}
//           onClick={handleOpen}
//         >
//           Resume
//         </p>
//         {/* <Button onClick={handleOpen}> Open</Button> */}
//       </ButtonToolbar>

//       <Modal open={open} onClose={handleClose}>
//         <Modal.Header>
//           <Modal.Title>Resume:</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Resume />
//         </Modal.Body>
//         <Modal.Footer>
//           {/* <Button onClick={handleClose} appearance="primary">
//             Ok
//           </Button> */}
//           <ResumeButton />
//           <Button onClick={handleClose} appearance="subtle">
//             Cancel
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// Skills Model
const ModalSkills = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ButtonToolbar>
        <p
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
          onClick={handleOpen}
        >
          Skills
        </p>
      </ButtonToolbar>

      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Skills:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Skills />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navi;
