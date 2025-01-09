import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bannerimg from "../assets/img/header-img.png"
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css';

const Banner = () => {
  return (
    <section className='banner' id="banner">
      <Container>
        <div  className='d-flex flex-column-reverse flex-md-row'>
          <Col xs={12} md={7} xl={7} className='animate__animated animate__fadeIn ps-2'>
            <span className='tagline fs-4 mt-4' >Welcome to my portfolio ..!</span>
            <h1 className='name'>
              Hi! I'm Shankar
            </h1>
            <p className='fs-5 pb-5'>
              <span className='tagline pb-0 mb-0 fs-4'>I'm a passionate Full Stack Web Developer</span>, specialized in building responsive, user-friendly applications and
              creating scalable backend solutions. With a background in AI & ML,
              I     enjoy solving problems and delivering impactful results. Let’s connect and
              collaborate on innovative projects!

            </p>
            <a href="#connect">
              <button className="letsconnect mt-0 p-3 rounded rounded-3 fs-5 animate__animated animate__slideRight">
                Let’s Connect <ArrowRightCircle className="arrow ms-2 fs-4 " />
              </button>

            </a>
          </Col>
          <Col xs={12} md={5} xl={5} className='p-5 pt-2 p-md-0 m-auto'>

            <img src={bannerimg} alt="My image" className='bannerimg rounded-circle animate__animated animate__zoomIn' />

          </Col>
        </div>
      </Container>

    </section>
  )
}

export default Banner