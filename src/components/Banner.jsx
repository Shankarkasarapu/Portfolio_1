import React, { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import bannerimg from "../assets/img/header-img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import "animate.css";
import bg from "../assets/img/Bannerbg.mp4";
import downloadIcon from "../assets/img/download anime.gif";

// Animated gradient circles background component
const AnimatedBackground = () => (
  <div
    className="animated-bg"
    style={{
      position: "absolute",
      inset: 0,
      zIndex: -9,
      overflow: "hidden",
      pointerEvents: "none",
    }}
  >
    {/* Top left gold circle */}
    <motion.div
      initial={{ opacity: 0.7, scale: 0.9 }}
      animate={{ opacity: [0.7, 0.9, 0.7], scale: [0.9, 1.1, 0.9] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        top: "-120px",
        left: "-120px",
        width: "320px",
        height: "320px",
        borderRadius: "50%",
        background: "radial-gradient(circle at 40% 40%, #d6c05cf0 0%, #000 80%)",
        filter: "blur(24px)",
        opacity: 0.7,
      }}
    />
    {/* Bottom right blue circle */}
    <motion.div
      initial={{ opacity: 0.6, scale: 1 }}
      animate={{ opacity: [0.6, 0.8, 0.6], scale: [1, 1.13, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        bottom: "-140px",
        right: "-140px",
        width: "340px",
        height: "340px",
        borderRadius: "50%",
        background: "radial-gradient(circle at 60% 60%, #4f818fff 0%, #000 80%)",
        filter: "blur(28px)",
        opacity: 0.6,
      }}
    />
    {/* Subtle moving lines */}
    <motion.div
      initial={{ x: -60, opacity: 0.14 }}
      animate={{ x: [0, 40, 0], opacity: [0.14, 0.22, 0.14] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        top: "30%",
        left: 0,
        width: "100vw",
        height: "2px",
        background: "linear-gradient(90deg, #d6c05c 0%, #4f818f 100%)",
        opacity: 0.14,
        filter: "blur(1px)",
      }}
    />
    <motion.div
      initial={{ x: 60, opacity: 0.12 }}
      animate={{ x: [0, -40, 0], opacity: [0.12, 0.18, 0.12] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        bottom: "22%",
        left: 0,
        width: "100vw",
        height: "2px",
        background: "linear-gradient(90deg, #4f818f 0%, #d6c05c 100%)",
        opacity: 0.12,
        filter: "blur(1px)",
      }}
    />
  </div>
);

const roles = ["Web Developer!!", "AI Enthusiast !!"];

const Banner = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [delta, setDelta] = useState(200);

  // Typing effect
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, isDeleting, roleIndex]);

  const tick = () => {
    const fullText = roles[roleIndex];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100);
    } else {
      setDelta(200);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(1200);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
      setDelta(400);
    }
  };

  // Detect mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  return (
    <section className="banner relative overflow-hidden" id="banner" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      {/* Animated gradient circles and lines */}
      <AnimatedBackground />

      {/* Video background with frosted glass overlay */}
      <div className="video-background absolute inset-0 -z-10">
        <video autoPlay muted loop className="background-video w-full h-full object-cover">
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40 backdrop-blur-md" />
      </div>

      <Container>
        <motion.div
          className="d-flex flex-column-reverse flex-md-row position-relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <Col
            xs={12}
            md={12}
            lg={7}
            xl={7}
            className="animate__animated animate__fadeIn ps-2 text-white"
          >
            <span className="tagline fs-5 mt-4 tracking-wide uppercase text-purple-300">
              Welcome to my portfolio ..!
            </span>

            <motion.h1
              className="name text-5xl font-extrabold mt-3 leading-tight"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              Hi👋 I'm Shankar <br />
              <span className="txt-rotate text-transparent bg-clip-text bg-gradient-to-r from-[#d6c05c] via-[#4f818f] to-[#d6c05c]">
                <span className="wrap" style={{ fontWeight: 700, fontSize: isMobile ? "1.2rem" : "2.6rem" }}>I'm a {text}</span>
              </span>
            </motion.h1>

            <p className="des fs-5 pb-5 mt-3 text-gray-200 max-w-xl">
              <span className="tagline pb-0 mb-0 fs-4 font-semibold">
                I'm a passionate Web Developer
              </span>
              , specialized in building responsive, user-friendly applications
              and creating scalable backend solutions. With a background in AI &
              ML, I enjoy solving problems and delivering impactful results.
              Let’s connect and collaborate on innovative projects!
            </p>

            <motion.div
              className="d-flex flex-column flex-sm-row gap-3 gap-md-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <a href="#connect">
                <button className="letsconnect mt-0 p-3 rounded fs-5 animate__animated animate__slideRight ">
                  <span className=" p-2">Let’s Connect</span>
                  <ArrowRightCircle className="arrow ms-2 fs-4 inline" />
                </button>
              </a>

              <a
                href="https://drive.google.com/file/d/1nxoFuqigPHv3U5vBjNN3JEH2pBPq5wns/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
                className="text-decoration-none"
              >
                <button
                  className="d-flex align-items-center rounded-3 ps-3 pe-2 fs-5 fw-semibold border hover:scale-105 transition-transform"
                  style={{
                    background: "transparent",
                    color: "#fff",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    letterSpacing: "0.5px",
                  }}
                >
                  <span className="me-2">📄 Resume</span>
                  <img
                    src={downloadIcon}
                    alt="Download Resume"
                    style={{
                      width: "40px",
                      height: "33px",
                      background: "transparent",
                    }}
                  />
                </button>
              </a>
            </motion.div>
          </Col>

          {/* Right Image */}
          <Col xs={12} md={5} xl={5} className="p-4 pt-0 pb-5 p-md-0 m-auto">
            <motion.img
              src={bannerimg}
              alt="My image"
              className="bannerimg rounded shadow-lg ring-4 ring-[#d6c05c]/50"
              initial={{ scale: 0.89, rotate: 4, opacity: 0.94 }}
              animate={{ scale: 0.93, rotate: 4, opacity: 1, y: [10, 6, 10] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                rotate: 3,
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
            />
          </Col>
        </motion.div>
      </Container>
    </section>
  );
};

export default Banner;
