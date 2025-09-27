import React, { useState } from 'react';
import { Button, Card, Carousel, Container, Row, Col } from 'react-bootstrap';
import doc42 from "../assets/img/Projects/DOC4U/doc43.png";
import doc4u from "../assets/img/Projects/DOC4U/doc4u2.png";
import doc44 from "../assets/img/Projects/DOC4U/doc4u4.png";
import doc45 from "../assets/img/Projects/DOC4U/doc4u5.png";
import doc46 from "../assets/img/Projects/DOC4U/doc46.png";
import amazon1 from "../assets/img/Projects/Amazon Clone/amazon (1).png";
import amazon2 from "../assets/img/Projects/Amazon Clone/amazon (2).png";
import amazon3 from "../assets/img/Projects/Amazon Clone/amazon (3).png";
import amazon4 from "../assets/img/Projects/Amazon Clone/amazon (4).png";
import amazon5 from "../assets/img/Projects/Amazon Clone/Screenshot 2024-11-03 192905.png";
import fake1 from "../assets/img/Projects/Fake Logo Detection/faklogo (1).png";
import fake2 from "../assets/img/Projects/Fake Logo Detection/faklogo (2).png";
import ddd1 from "../assets/img/Projects/DDD/ddd1.png";
import ddd2 from "../assets/img/Projects/DDD/ddd2.png";

const Projects = () => {
    const [expandedProject, setExpandedProject] = useState(null);

    const projects = [
        {
            title: "DOC4U: Your Personalized Doctor Appointment Hub",
            description: "Designed and developed a robust web application for seamless doctor appointment scheduling. The system featured secure user authentication with OTP-based email verification, an intuitive interface for browsing and booking doctor profiles, and integration with Razorpay for secure payment processing.",
            techStack: "MERN Stack",
            imgurls: [doc4u, doc42, doc44, doc45, doc46],
            demo: "https://doc4u-frontend.onrender.com/",
        },
        {
            title: "Driver Drowsiness Detection System",
            description: "Developed a real-time driver drowsiness detection system using deep learning and computer vision to enhance road safety. The system tracks the driver’s eyes and facial features through a webcam, identifying signs of fatigue such as eye closure and yawning. Alerts are triggered with audio notifications to prevent accidents caused by drowsiness.",
            techStack: "Python, OpenCV, TensorFlow/Keras, Deep Learning (CNN), NumPy",
            imgurls: [ddd1, ddd2],
            demo: "http://ijrar.org/viewfull.php?&p_id=IJRAR1ECP252"
        },

        {
            title: "E-Commerce Web Page replicating Amazon",
            description: "Built a fully responsive e-commerce web application inspired by Amazon, optimized for multi-device compatibility to deliver a smooth shopping experience. Implemented efficient Add to Cart and Remove from Cart functionalities.",
            techStack: "HTML, CSS, Bootstrap, React.js, Restful API",
            imgurls: [amazon1, amazon2, amazon3, amazon4, amazon5],
            demo: "",
        },
        {
            title: "Fake Logo Detection using Deep Learning",
            description: "Developed a deep learning model leveraging RESNET50 architecture to accurately identify fake logos with an 85% accuracy rate. Preprocessed datasets for training and applied OpenCV for real-time detection.",
            techStack: "RESNET50, CNN, Pandas, OpenCV",
            imgurls: [fake1, fake2],
            demo: "",
        },


    ];

    return (
        <div
            className="projects App py-5 px-4"
            id="projects"
            style={{

                background: "linear-gradient(-180deg, #1b1a1aff 55%, #645825ff 100%)",
                fontFamily: "sans-serif",
                clipPath: "polygon(0 0, 100% 0, 100% 96%, 20% 90%, 0 95%)",
            }}
        >
            <Container style={{ marginBottom: "199px" }}>
                <Row>
                    <h1 className="head pb-2 text-center text-white m-0 ">Projects</h1>
                    <div
                        style={{
                            width: "120px",
                            height: "4px",
                            background: "#4f818fff",
                            margin: "0 auto 16px auto",
                            borderRadius: "2px",
                        }}
                    >

                    </div>
                    <p className="text-secondary text-center mb-5 fs-5 fw-semibold">
                        A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
                    </p>

                </Row>
                <Row className="">
                    {projects.map((item, index) => (
                        <Col
                            key={index}
                            xs={12}
                            sm={10}
                            md={6}
                            lg={5}
                            xl={4}
                            className="mb-4 d-flex g-4 justify-content-center"
                        >
                            <Card
                                className={`projectcard pb-0 text-center ${expandedProject === index ? "expanded-card" : ""}`}
                                style={{
                                    backgroundColor: "#1d2125ff",
                                    color: "#fff",
                                    transition: "height 0.3s ease",
                                    height: expandedProject === index ? "auto" : "455px",
                                    overflow: "visible",
                                }}
                            >
                                <Carousel interval={5000} style={{ height: "280px" }}>
                                    {item.imgurls.map((img, imgIndex) => (
                                        <Carousel.Item key={imgIndex}>
                                            <img
                                                src={img}
                                                className="w-100 m-auto p-2"
                                                alt={`Slide ${imgIndex}`}
                                                style={{
                                                    height: "235px",
                                                    objectFit: "cover",
                                                    borderRadius: "10px",
                                                }}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                                <Card.Body>
                                    <Card.Title className="text-white">{item.title}</Card.Title>
                                    <Card.Text className="techstack fs-6 pt-2">{item.techStack}</Card.Text>
                                    {expandedProject === index && (
                                        <p className="pt-4">{item.description}</p>
                                    )}
                                    <div className="mt-3 d-flex justify-content-evenly">
                                        <Button
                                            variant="outline-light"
                                            className="seemore rounded border-0 col-5"
                                            onClick={() =>
                                                setExpandedProject(
                                                    expandedProject === index ? null : index
                                                )
                                            }
                                        >
                                            {expandedProject === index ? "See Less" : "See More"}
                                        </Button>
                                        {item.demo ? (
                                            <Button
                                                variant="outline-light"
                                                className="rounded border col-5"
                                                onClick={() => window.open(item.demo, "_blank")}
                                            >
                                                DEMO🌐
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="secondary"
                                                className="rounded border-light col-5"
                                                disabled
                                            >
                                                No Demo⚠️
                                            </Button>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Projects;
