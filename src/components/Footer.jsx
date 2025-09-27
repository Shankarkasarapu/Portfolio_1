import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/Footer/Connect icons/nav-icon1.svg";
import navIcon2 from "../assets/img/Footer/Connect icons/nav-icon2.svg";
import navIcon3 from "../assets/img/Footer/Connect icons/nav-icon3.svg";
import leet from "../assets/img/Footer/Connect icons/leetcode.svg";
import mail from "../assets/img/Footer/mail.png";
import pin from "../assets/img/Footer/pin.png";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="align-items-start text-center text-sm-start">
          {/* Left Column - Profile Info */}
          <Col sm={6} className="mb-4 mb-sm-0">
            <h3 className="foothead text-white mb-4">My Profile</h3>
            <div className="d-flex align-items-center mb-3">
              <img src={mail} alt="mail" className="me-3" style={{ width: "22px" }} />
              <span className="text-gray">kasarapugowrishankar@gmail.com</span>
            </div>
            <div className="d-flex align-items-center">
              <img src={pin} alt="pin" className="me-3" style={{ width: "22px" }} />
              <span className="text-gray">Visakhapatnam, AP</span>
            </div>
          </Col>

          {/* Right Column - Social Links */}
          <Col sm={6} className="text-center text-sm-end">
            <h3 className="text-white mb-4">Connect with Me</h3>
            <div className="social-icon mb-3">
              <a href="https://leetcode.com/u/Shankarkasarapu/">
                <img src={leet} alt="Leetcode" />
              </a>
              <a href="https://www.linkedin.com/in/gowri-shankar-kasarapu-75112623a/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Shankarkasarapu">
                <img src={navIcon2} alt="Github" />
              </a>
              <a href="https://www.instagram.com/shankar.k_007/">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
          </Col>
        </Row>

        {/* Divider + Copyright */}
        <hr className="my-4 border-light opacity-25" />
        <Row>
          <Col className="text-center">
            <p className="text-gray m-0">© 2025 Gowri Sankar. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
