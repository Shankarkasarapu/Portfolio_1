import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

// --- Step 1: Import all your skill icons from the assets folder ---
import htmlicon from "../assets/img/skills icons/HTMLicon.png";
import cssicon from "../assets/img/skills icons/cssicon.png";
import jsicon from "../assets/img/skills icons/jsicon.png";
import bootstrapicon from "../assets/img/skills icons/bootstrapicon.png";
import reacticon from "../assets/img/skills icons/reacticon.png";
import nodeicon from "../assets/img/skills icons/nodejs.png";
import expressicon from "../assets/img/skills icons/expressicon.png";
import pythonicon from "../assets/img/skills icons/pythonicon.png";
import mongodb from "../assets/img/skills icons/mangodb.png";
import github from "../assets/img/skills icons/github icon.png";
import git from "../assets/img/skills icons/git icon.png";
import mlicon from "../assets/img/skills icons/MLicon.png";
import aiicon from "../assets/img/skills icons/AIicon.png";
import postgresql from "../assets/img/skills icons/postgreSql.png";
import MUI from "../assets/img/skills icons/material_ui.png";
import firebase from "../assets/img/skills icons/firebase.png";
import c from "../assets/img/skills icons/C.png";
import vscode from "../assets/img/skills icons/vscode.png";
import render from "../assets/img/skills icons/render.webp";
import TensorFlow from "../assets/img/skills icons/Tensorflow.png";
import OpenCV from "../assets/img/skills icons/opencv.png";
import Deeplearning from "../assets/img/skills icons/Deep learning.png";

// --- Step 2: Use your original SkillsInfo data structure ---
const SkillsInfo = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", logo: htmlicon },
            { name: "CSS", logo: cssicon },
            { name: "JavaScript", logo: jsicon },
            { name: "Bootstrap", logo: bootstrapicon },
            { name: "React JS", logo: reacticon },
            { name: "Material UI", logo: MUI },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node JS", logo: nodeicon },
            { name: "Express JS", logo: expressicon },
            { name: "MongoDB", logo: mongodb },
            { name: "PostgreSQL", logo: postgresql },
            { name: "Firebase", logo: firebase },
        ],
    },
    {
        title: "Lang's & Tools",
        skills: [
            { name: "Python", logo: pythonicon },
            { name: "C", logo: c },
            { name: "JavaScript", logo: jsicon },
            { name: "Git", logo: git },
            { name: "GitHub", logo: github },
            { name: "VS Code", logo: vscode },
            { name: "Render", logo: render },
        ],
    },
    {
        title: "AI & ML",
        skills: [
            { name: "Machine Learning", logo: mlicon },
            { name: "Artificial Intelligence", logo: aiicon },
            { name: "TensorFlow", logo: TensorFlow },
            { name: "OpenCV", logo: OpenCV },
            { name: "Deep Learning", logo: Deeplearning },
        ],
    },
];

// --- Skill Category Card Component with Framer Motion ---
const SkillCategoryCard = ({ category, index }) => (
    <Col
        xl={5}
        lg={6}
        md={10}
        className="mb-4"
    >
        <motion.div
            initial={{ opacity: 0.5, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.10, duration: 0.6 }}
            // viewport={{ once: true, amount: 0.3 }}
            className="bg-dark border border-2 border-secondary rounded-4 p-4 h-100"
        >
            <h3 className="text-center fw-bold mb-4" style={{color : "#b6a073ff"}}>{category.title}</h3>
            <div className="d-flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                    <div key={skill.name} className="d-flex align-items-center bg-secondary bg-opacity-25 rounded p-2 pe-3">
                        <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            style={{ width: "28px", height: "28px", marginRight: "12px" }}
                        />
                        <span className="text-white fw-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    </Col>
);

// --- Main Skills Component ---
const Skills = () => (
    <section id="skills" className="bg-black text-light py-5">
        <Container className="py-5">
            <div className="text-center mb-5">
                <h2 className="display-4 fw-bolder">
                    Technical <span className="">Skillset</span>
                </h2>
                <hr className="text-info opacity-100 mx-auto" style={{ width: "100px", height: "3px" }} />
                <p className="lead text-white-50 mt-3 mx-auto" style={{ maxWidth: "600px" }}>
                    A collection of my technical skills and expertise honed through various projects and experiences.
                </p>
            </div>
            <Row className="justify-content-center">
                {SkillsInfo.map((category, index) => (
                    <SkillCategoryCard
                        key={category.title}
                        category={category}
                        index={index}
                    />
                ))}
            </Row>
        </Container>
    </section>
);

export default Skills;