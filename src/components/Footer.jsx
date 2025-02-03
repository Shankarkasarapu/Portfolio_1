import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import mail from "../assets/img/footer/mail.png";
import pin from "../assets/img/footer/pin.png";


const Footer = () => {
    return (
        <div className='App'>
            <Container>

                <Row>
                    <Col size={12} sm={6}>
                        <h1 className="foothead pt-4 pb-2">My Profile</h1>
                        <div className='col-5 pb-4 text-center'>
                            <p className='ps-4 d-flex'>
                                <img src={mail} alt="mail" className='mail-icon pe-3' />
                                kasarapugowrishankar@gmail.com
                            </p>
                            <p className='ps-4 d-flex align-items-center'>
                                <img src={pin} alt="pin" className='pin-icon pe-3' />
                                Rajam,Vizianagarm
                            </p>
                        </div>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end py-4">
                        <h2 className='head py-2'> Follow Me on...</h2>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/gowri-shankar-kasarapu-75112623a/"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://github.com/Shankarkasarapu"><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://www.instagram.com/shankar.k_007/"><img src={navIcon3} alt="Icon" /></a>

                        </div>
                        <p className='pt-3'>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Footer