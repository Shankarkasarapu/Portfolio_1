import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/Footer/Connect icons/nav-icon1.svg";
import navIcon2 from "../assets/img/Footer/Connect icons/nav-icon2.svg";  

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
        <Navbar.Brand href="#banner" className="head">
          <div className="fs-4 fw-semibold cursor-pointer">
            <span style={{ color: "#5db6cfb7" }}>&lt;</span>
            <span className="text-white">Gowri</span>
            <span style={{ color: "#e8c83def" }}>/</span>
            <span className="text-white">Sankar</span>
            <span style={{ color: "#5db6cfb7" }}>&gt;</span>
          </div>

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
            <Nav.Link href="#connect" className="menu text-light fs-5 me-3">Connect</Nav.Link>
          </Nav>

          {/* Connect Button */}
          <div className="social-icon">
            <a href="https://github.com/Shankarkasarapu"><img src={navIcon2} alt="Icon" /></a>
            <a href="https://www.linkedin.com/in/gowri-shankar-kasarapu-75112623a/"><img src={navIcon1} alt="Icon" /></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
