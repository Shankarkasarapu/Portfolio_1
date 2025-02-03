import React, { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import bannerimg from "../assets/img/header-img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import bg from "../assets/img/Bannerbg.mp4"

const Banner = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200); // Speed of typing and deleting
  const [index, setIndex] = useState(0);
  const fullText = " Full Stack Developer !!"; 
  const period = 2000; 

  // Handle the typing and deleting effect
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker); // Cleanup the interval when component unmounts
  }, [text]);

  const tick = () => {
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1) // Delete one character
      : fullText.substring(0, text.length + 1); // Add one character

    setText(updatedText);

    if (isDeleting) {
      setDelta(100); // Speed up when deleting
    } else {
      setDelta(200); // Typing speed
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(index + 1);
      setDelta(period); // Wait before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
    }
  };

  return (
    <section className="banner" id="banner">
      {/* Video background */}
      <div className="video-background">
        <video autoPlay muted loop className="background-video">
          <source
            src={bg} type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Banner content */}
      <Container>
        <div className="d-flex flex-column-reverse flex-md-row position-relative">
          {/* Left Content */}
          <Col xs={12} md={12} lg={7} xl={7} className="animate__animated animate__fadeIn ps-2 text-white">
            <span className='tagline fs-5 mt-4'>Welcome to my portfolio ..!</span>
            <h1 className='name'>
              Hi👋I'm Shankar <br /><span className="txt-rotate"><span className="wrap">{text}</span></span>
            </h1>
            <p className=" des fs-5 pb-5">
              <span className="tagline  pb-0 mb-0 fs-4">I'm a passionate Full Stack Web Developer</span>, specialized in
              building responsive, user-friendly applications and creating scalable backend solutions. With a background
              in AI & ML, I enjoy solving problems and delivering impactful results. Let’s connect and collaborate on
              innovative projects!
            </p>
            <a href="#connect">
              <button className="letsconnect mt-0 p-3 rounded rounded-3 fs-5 animate__animated animate__slideRight">
                Let’s Connect <ArrowRightCircle className="arrow ms-2 fs-4" />
              </button>
            </a>
          </Col>

          {/* Right Image */}
          <Col xs={12} md={5} xl={5} className="p-5 pt-2 p-md-0 m-auto">
            <img src={bannerimg} alt="My image" className="bannerimg rounded-circle animate__animated animate__zoomIn" />
          </Col>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
