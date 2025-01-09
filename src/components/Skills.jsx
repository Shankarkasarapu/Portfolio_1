import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import htmlicon from "../assets/img/skills icons/HTMLicon.png";
import aiicon from "../assets/img/skills icons/AIicon.png";
import mlicon from "../assets/img/skills icons/MLicon.png";
import bootstrapicon from "../assets/img/skills icons/bootstrapicon.png";
import cssicon from "../assets/img/skills icons/cssicon.png";
import jsicon from "../assets/img/skills icons/jsicon.png";
import reacticon from "../assets/img/skills icons/reacticon.png";
import nodeicon from "../assets/img/skills icons/nodejs.png";
import expressicon from "../assets/img/skills icons/expressicon.png";
import pythonicon from "../assets/img/skills icons/pythonicon.png";
import mongodb from "../assets/img/skills icons/mangodb.png";
import github from "../assets/img/skills icons/github icon.png";
import git from "../assets/img/skills icons/git icon.png";

const skillsData = [
    { title: 'HTML', icon: htmlicon },
    { title: 'CSS', icon: cssicon },
    { title: 'Java script', icon: jsicon },
    { title: 'Bootstrap', icon: bootstrapicon },
    { title: 'React js', icon: reacticon },
    { title: 'Node js', icon: nodeicon },
    { title: 'Express js', icon: expressicon },
    { title: 'MongoDB', icon: mongodb },
    { title: 'Git', icon: git },
    { title: 'GitHub', icon: github },
    { title: 'Python', icon: pythonicon },
    { title: 'Machine Learning', icon: mlicon },
    { title: 'Artificial Intelligence', icon: aiicon },
];

const Skills = () => {
    return (
        <div className="App px-4 pb-5" id="skills">
            <Container>
                <Row className='pb-4'>
                    <h1 className="head pt-5 pb-5">My Skills</h1>
                    <div className="skillscards d-flex flex-wrap justify-content-evenly ">
                        {skillsData.map((skill, index) => (
                            <Card
                                key={index}
                                className="skillcard col-4 col-sm-3 col-md-2 col-lg-2 col-xl-1  m-2 ">

                                <Card.Img
                                    variant="top"
                                    className='animate__animated animate__zoomIn text-center mx-auto'
                                    src={skill.icon}
                                    style={{ width: "70px ", height: "70px" }}
                                />
                                <Card.Title className='text-white text-center pt-3'><h5>{skill.title}</h5></Card.Title>

                            </Card>
                        ))}
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;
