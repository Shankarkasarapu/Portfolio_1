import React, { useState } from 'react';
import { Button, Card, Carousel, Container, Row } from 'react-bootstrap';
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

const Projects = () => {
    const [expandedProject, setExpandedProject] = useState(null);

    const projects = [
        {
            title: "DOC4U: Your Personalized Doctor Appointment Hub",
            description: "Designed and developed a robust web application for seamless doctor appointment scheduling. The system featured secure user authentication with OTP-based email verification, an intuitive interface for browsing and booking doctor profiles, and integration with Razorpay for secure payment processing.",
            techStack: "MERN Stack",
            imgurls: [doc4u, doc42, doc44, doc45, doc46],
        },
        {
            title: "E-Commerce Web Page replicating Amazon",
            description: "Built a fully responsive e-commerce web application inspired by Amazon, optimized for multi-device compatibility to deliver a smooth shopping experience. Implemented efficient Add to Cart and Remove from Cart functionalities.",
            techStack: "HTML, CSS, Bootstrap, React.js, Restful API",
            imgurls: [amazon1, amazon2, amazon3, amazon4, amazon5],
        },
        {
            title: "Fake Logo Detection using Deep Learning",
            description: "Developed a deep learning model leveraging RESNET50 architecture to accurately identify fake logos with an 85% accuracy rate. Preprocessed datasets for training and applied OpenCV for real-time detection.",
            techStack: "RESNET50, CNN, Pandas, OpenCV",
            imgurls: [fake1, fake2],
        },
    ];

    return (
        <div className="projects App py-5 px-4" id="projects">
            <Container>
                <Row>
                    <h1 className="head pb-3 text-start text-white m-0">Projects</h1>
                    <div className='text-end pe-3'>{`Scroll to see more>>`}</div>
                    <div className="projectcards d-flex  justify-content-evenly">
                        
                        {projects.map((item, index) => (
                            <Card
                                key={index}
                                className={`projectcard col-11 col-sm-10 col-md-7 col-lg-5 col-xl-4 m-4 text-center ${expandedProject === index ? "expanded-card" : ""
                                    }`}
                                style={{
                                    backgroundColor: "#212529",
                                    color: "#fff",
                                    transition: "height 0.3s ease",
                                    height: expandedProject === index ? "auto" : "420px",
                                    overflow: expandedProject === index ? "visible" : "hidden",
                                }}
                            >
                                <Carousel interval={5000} style={{ height: '280px' }}>
                                    {item.imgurls.map((img, imgIndex) => (
                                        <Carousel.Item key={imgIndex}>
                                            <img
                                                src={img}
                                                className="w-100 m-auto p-4"
                                                alt={`Slide ${imgIndex}`}
                                                style={{ height: '235px', objectFit: 'cover', borderRadius: '10px' }}
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
                                            className="rounded border-0 col-5"
                                            onClick={() =>
                                                setExpandedProject(
                                                    expandedProject === index ? null : index
                                                )
                                            }
                                        >
                                            {expandedProject === index ? "See Less" : "See More"}
                                        </Button>
                                        {/* <Button
                                            variant="outline-light"
                                            className="rounded border-0 col-5"
                                        >
                                            DEMO
                                        </Button> */}
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;
