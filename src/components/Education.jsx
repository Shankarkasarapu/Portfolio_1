import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { motion } from "framer-motion";
import gmr from "../assets/img/education/GMR.jpg";
import srichaitanya from "../assets/img/education/sri chaitanya.png";

const educationData = [
    { year: "2021-25", title: "Bachelor's of Technology ", marks: "CGPA 8.72/10", img: gmr, description: "Completed my Bachelor's of Technology in Artificial Intelligence and Machine Learning at GMR Institute of Technology." },
    { year: "2019-21", title: "Intermediate", marks: "Percentage 96%", img: "https://th.bing.com/th/id/R.97536129fc23cba5e029ed121087eb94?rik=Zz3TCGpFpFakmA&riu=http%3a%2f%2fhyderabadboss.com%2fwp-content%2fuploads%2f2016%2f10%2fsri-chaitanya.jpg&ehk=UPeUPYrBz1Bm2HVwm84N2R1OHnVQOaMGVTecVPUyMq8%3d&risl=&pid=ImgRaw&r=0", description: "Completed Higher Secondary Education from Sri Chaitanya Junior College." },
    { year: "2019", title: "High School", marks: "CGPA 10/10", img: "https://th.bing.com/th/id/R.97536129fc23cba5e029ed121087eb94?rik=Zz3TCGpFpFakmA&riu=http%3a%2f%2fhyderabadboss.com%2fwp-content%2fuploads%2f2016%2f10%2fsri-chaitanya.jpg&ehk=UPeUPYrBz1Bm2HVwm84N2R1OHnVQOaMGVTecVPUyMq8%3d&risl=&pid=ImgRaw&r=0", description: "Completed my High School from Sri Chaitanya techno School." },
];

// Custom hook for in-view animation
function useInView(threshold = 0.1) {
    const ref = useRef();
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, inView];
}

const Education = () => {
    return (
        <div className='education' id='education'>
            <Container className="education-journey pb-5 px-2 px-md-4 py-5">
                <h1 className="head pt-4 pb-4 text-center">Education</h1>
                <div className="timeline m-0 ps-2 ps-md-0 ms-3 ms-md-5 ">
                    {educationData.map((item, index) => {
                        const [ref, inView] = useInView(0.2);
                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                className="timeline-item"
                                style={{
                                    opacity: inView ? 1 : 0.3,
                                    transform: inView ? "translateY(0)" : "translateY(40px)",
                                    transition: `opacity 0.8s ${0.1 + index * 0.12}s, transform 0.7s ${0.1 + index * 0.12}s`,
                                    willChange: "transform, opacity",
                                }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                <Row className="align-items-center m-0 mb-4 ">
                                    <Col xs={12} md={2} className="d-flex flex-row flex-md-column align-items-center justify-content-md-center mb-2 mb-md-0 ">
                                        <span className="year fs-6 fs-md-5 fw-bold text-center mb-2 mb-md-3">{item.year}</span>
                                        <TaskAltIcon className='mb-1 ms-2 ms-md-0' />
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <div className="timeline-content ms-2 ms-sm-0 d-flex align-items-center gap-3 p-2 p-md-4 rounded-3 border"
                                            style={{
                                                borderRadius: "1rem",
                                                border: "1px solid #9cbfc9e7",
                                                background: "rgba(30,32,32,0.6)",
                                                boxShadow: "0 0 20px 1px rgba(130,69,236,0.10)",
                                            }}>
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                style={{
                                                    background: '#fff',
                                                    objectFit: 'contain',
                                                    borderRadius: '50%',
                                                    padding: '2px',
                                                    height: '38px',
                                                    width: '38px',
                                                }}
                                                className="me-2"
                                            />
                                            <div>
                                                <h4 className='fs-6 fs-md-5 mb-1 mb-md-0'>{item.title} <span className='text-light'>- {item.marks}</span></h4>
                                                <p className='m-0' style={{ fontSize: "0.97rem" }}>{item.description}</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
};

export default Education;
