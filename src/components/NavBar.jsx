import { Navbar, Nav, Container } from "react-bootstrap";
// import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  return (
    <Navbar expand="md" className="animate__animated animate__slideInDown">
      <Container className="animate__animated animate__slideInDown d-flex">
        <Navbar.Brand href="#banner" className="head text-white"><h2>My Profile</h2></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#banner" className="menu text-light fs-5 me-3 active" active="true">Home</Nav.Link>
            <Nav.Link href="#education" className="menu text-light fs-5 me-3">Education</Nav.Link>
            <Nav.Link href="#skills" className="menu text-light fs-5 me-3">Skills</Nav.Link>
            <Nav.Link href="#Experience" className="menu text-light fs-5 me-3">Experience</Nav.Link>
            <Nav.Link href="#projects" className="menu text-light fs-5 me-3">Projects</Nav.Link>
          </Nav>
          <span>
            <a href="#connect">
              <button className="letsconnect p-3 rounded fs-6"><span>Let’s Connect</span></button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
