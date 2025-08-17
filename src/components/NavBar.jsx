import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container className="navcontainer animate__animated animate__slideInDown d-flex">
        <Navbar.Brand href="#banner" className="head text-white">
          <h2>My Profile</h2>
        </Navbar.Brand>

        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Collapse for Responsiveness */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#banner" className="menu text-light fs-5 me-3">Home</Nav.Link>
            <Nav.Link href="#education" className="menu text-light fs-5 me-3">Education</Nav.Link>
            <Nav.Link href="#skills" className="menu text-light fs-5 me-3">Skills</Nav.Link>
            <Nav.Link href="#Experience" className="menu text-light fs-5 me-3">Experience</Nav.Link>
            <Nav.Link href="#projects" className="menu text-light fs-5 me-3">Projects</Nav.Link>
          </Nav>

          {/* Connect Button */}
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
