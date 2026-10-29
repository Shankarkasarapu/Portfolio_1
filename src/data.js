// Content for the portfolio
import doc42 from "./assets/img/Projects/DOC4U/doc43.png";
import doc4u from "./assets/img/Projects/DOC4U/doc4u2.png";
import doc44 from "./assets/img/Projects/DOC4U/doc4u4.png";
import doc45 from "./assets/img/Projects/DOC4U/doc4u5.png";
import doc46 from "./assets/img/Projects/DOC4U/doc46.png";
import amazon1 from "./assets/img/Projects/Amazon Clone/amazon (1).png";
import amazon2 from "./assets/img/Projects/Amazon Clone/amazon (2).png";
import amazon3 from "./assets/img/Projects/Amazon Clone/amazon (3).png";
import amazon4 from "./assets/img/Projects/Amazon Clone/amazon (4).png";
import amazon5 from "./assets/img/Projects/Amazon Clone/Screenshot 2024-11-03 192905.png";
import fake1 from "./assets/img/Projects/Fake Logo Detection/faklogo (1).png";
import fake2 from "./assets/img/Projects/Fake Logo Detection/faklogo (2).png";
import ddd1 from "./assets/img/Projects/DDD/ddd1.png";
import ddd2 from "./assets/img/Projects/DDD/ddd2.png";

import ibm from "./assets/img/Experience/IBM logo.png";
import awetecks from "./assets/img/Experience/aweteck_services_logo.jpeg";
import forage from "./assets/img/Experience/Forage icon.png";
import gmr from "./assets/img/Education/GMR.jpg";
import chaitanya from "./assets/img/Education/sri chaitanya.png";

import htmlicon from "./assets/img/skills icons/HTMLicon.png";
import cssicon from "./assets/img/skills icons/cssicon.png";
import jsicon from "./assets/img/skills icons/jsicon.png";
import bootstrapicon from "./assets/img/skills icons/bootstrapicon.png";
import reacticon from "./assets/img/skills icons/reacticon.png";
import nodeicon from "./assets/img/skills icons/nodejs.png";
import expressicon from "./assets/img/skills icons/expressicon.png";
import pythonicon from "./assets/img/skills icons/pythonicon.png";
import mongodb from "./assets/img/skills icons/mangodb.png";
import github from "./assets/img/skills icons/github icon.png";
import git from "./assets/img/skills icons/git icon.png";
import mlicon from "./assets/img/skills icons/MLicon.png";
import aiicon from "./assets/img/skills icons/AIicon.png";
import postgresql from "./assets/img/skills icons/postgreSql.png";
import MUI from "./assets/img/skills icons/material_ui.png";
import firebase from "./assets/img/skills icons/firebase.png";
import c from "./assets/img/skills icons/C.png";
import vscode from "./assets/img/skills icons/vscode.png";
import render from "./assets/img/skills icons/render.webp";
import TensorFlow from "./assets/img/skills icons/Tensorflow.png";
import OpenCV from "./assets/img/skills icons/opencv.png";
import Deeplearning from "./assets/img/skills icons/Deep learning.png";

export const profile = {
  name: "Gowri Sankar Kasarapu",
  role: "Associate System Engineer · IBM",
  roles: ["AI / ML Engineer", "Data Science Enthusiast", "GenAI Explorer", "Full Stack Developer"],
  headline: "I'm an AI & ML graduate",
  summary:
    " who turns data into working models: from cleaning and feature engineering to training, tuning and validating them. I've built computer-vision and prediction systems, published research on driver drowsiness detection, and I'm exploring generative AI and LLMs. With full stack experience behind me, I like taking ideas all the way to something people can use.",
  stats: [
    { value: "87%", label: "accuracy, heart disease model" },
    { value: "17%", label: "faster dashboard at Awetecks" },
    { value: "1", label: "research paper published" },
    { value: "8.7", label: "CGPA, B.Tech AI & ML" },
  ],
  email: "kasarapugowrishankar@gmail.com",
  location: "Visakhapatnam, AP",
  resume: "/Gowri_Sankar_Resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/Shankarkasarapu" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gowri-shankar-kasarapu-75112623a/" },
    { label: "LeetCode", href: "https://leetcode.com/u/Shankarkasarapu/" },
    { label: "Instagram", href: "https://www.instagram.com/shankar.k_007/" },
  ],
};

export const experience = [
  {
    company: "IBM",
    place: "Bengaluru, India",
    role: "Associate System Engineer",
    date: "Dec 2025 – Present",
    icon: ibm,
    points: [
      "Supported Agile SDLC workflows using Jira and GitLab: sprint planning, version control, issue tracking and release cycles across enterprise application delivery.",
      "Executed functional and regression testing, documented defects and worked with cross-functional teams to speed up resolution.",
    ],
  },
  {
    company: "Aweteck Services Pvt Ltd",
    place: "Visakhapatnam, India",
    role: "MERN FullStack Web Developer",
    date: "August 2024 – November 2024",
    icon: awetecks,
    points: [
      "Built admin dashboard features for the Skills Uprise platform with React.js and Node.js, improving performance by 17% through offline-caching optimisations.",
      "Built data transformation pipelines with Python, SQL and Pandas to analyse employee datasets and support stakeholder reporting.",
      "Worked in a 6-member cross-functional Agile team and prepared technical documentation.",
    ],
  },
  {
    company: "Accenture (Forage)",
    role: "Data Analytics and Visualization Intern",
    date: "April 2024",
    icon: forage,
    points: [],
  },
];

const allProjects = [
  {

    title: "Heart Disease Prediction",
    kind: "Machine Learning",
    metric: "87% accuracy",
    stack: "Python, Scikit-learn, Pandas, NumPy, Matplotlib",
    description:
      "End-to-end ML delivery pipeline: data cleaning, feature engineering, EDA, training and tuning. Benchmarked Logistic Regression, Random Forest and SVM, reaching 87% accuracy with GridSearchCV, validated with F1-score, ROC-AUC and cross-validation.",
    images: [],
    demo: "https://github.com/Shankarkasarapu",
    demoLabel: "GitHub",
  },
  {
    title: "DOC4U: Your Personalized Doctor Appointment Hub",
    kind: "Full Stack",
    metric: "Razorpay · OTP · Google login",
    stack: "MERN Stack",
    description:
      "Designed and developed a robust web application for seamless doctor appointment scheduling. The system featured secure user authentication with OTP-based email verification, an intuitive interface for browsing and booking doctor profiles, and integration with Razorpay for secure payment processing. Also added Google login, real-time notifications with Nodemailer, deployment on Render and an optimised MongoDB database.",
    images: [doc4u, doc42, doc44, doc45, doc46],
    demo: "https://doc4u-frontend.onrender.com/",
  },
  {
    title: "Driver Drowsiness Detection System",
    kind: "Computer Vision",
    metric: "Published · IJRAR, ICETS'25",
    stack: "Python, OpenCV, TensorFlow/Keras, YOLOv8, Deep Learning (CNN), NumPy",
    description:
      "Developed a real-time driver drowsiness detection system using deep learning and computer vision to enhance road safety. The system tracks the driver's eyes and facial features through a webcam, identifying signs of fatigue such as eye closure and yawning. Alerts are triggered with audio notifications to prevent accidents caused by drowsiness. Published in the IJRAR Journal and presented at ICETS'25.",
    images: [ddd1, ddd2],
    demo: "http://ijrar.org/viewfull.php?&p_id=IJRAR1ECP252",
    demoLabel: "Read paper",
  },
  {
    title: "E-Commerce Web Page replicating Amazon",
    kind: "Frontend",
    metric: "React · REST API",
    stack: "HTML, CSS, Bootstrap, React.js, Restful API",
    description:
      "Built a fully responsive e-commerce web application inspired by Amazon, optimized for multi-device compatibility to deliver a smooth shopping experience. Implemented efficient Add to Cart and Remove from Cart functionalities.",
    images: [amazon1, amazon2, amazon3, amazon4, amazon5],
    demo: "",
  },
  {
    title: "Fake Logo Detection using Deep Learning",
    kind: "Deep Learning",
    metric: "85% accuracy",
    stack: "RESNET50, CNN, Pandas, OpenCV",
    description:
      "Developed a deep learning model leveraging RESNET50 architecture to accurately identify fake logos with an 85% accuracy rate. Preprocessed datasets for training and applied OpenCV for real-time detection.",
    images: [fake1, fake2],
    demo: "",
  },
];

// AI/ML work first
const projectOrder = [
  "Heart Disease Prediction",
  "Driver Drowsiness Detection System",
  "Fake Logo Detection using Deep Learning",
  "DOC4U: Your Personalized Doctor Appointment Hub",
  "E-Commerce Web Page replicating Amazon",
];
export const projects = [...allProjects].sort(
  (a, b) => projectOrder.indexOf(a.title) - projectOrder.indexOf(b.title)
);

const allSkills = [
  {
    group: "Frontend",
    items: [
      { name: "HTML", logo: htmlicon },
      { name: "CSS", logo: cssicon },
      { name: "JavaScript", logo: jsicon },
      { name: "Bootstrap", logo: bootstrapicon },
      { name: "React JS", logo: reacticon },
      { name: "Material UI", logo: MUI },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node JS", logo: nodeicon },
      { name: "Express JS", logo: expressicon },
      { name: "MongoDB", logo: mongodb },
      { name: "PostgreSQL", logo: postgresql },
      { name: "Firebase", logo: firebase },
      { name: "REST APIs" },
    ],
  },
  {
    group: "Lang's & Tools",
    items: [
      { name: "Python", logo: pythonicon },
      { name: "C", logo: c },
      { name: "JavaScript", logo: jsicon },
      { name: "SQL" },
      { name: "Git", logo: git },
      { name: "GitHub", logo: github },
      { name: "GitLab" },
      { name: "Jira" },
      { name: "AWS Cloud" },
      { name: "VS Code", logo: vscode },
      { name: "Render", logo: render },
    ],
  },
  {
    group: "AI & ML",
    items: [
      { name: "TensorFlow", logo: TensorFlow },
      { name: "OpenCV", logo: OpenCV },
      { name: "Deep Learning", logo: Deeplearning },
      { name: "Scikit-learn" },
      { name: "YOLOv8" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
    ],
  },

  {
    group: "AI Lifecycle & Practices", // order set by skillOrder below
    items: [
      { name: "Model Training & Validation" },
      { name: "Performance Testing" },
      { name: "Hyperparameter Tuning" },
      { name: "EDA" },
      { name: "Feature Engineering" },
      { name: "Data Reporting" },
      { name: "Dashboard Development" },
      { name: "Agile / Scrum" },
      { name: "SDLC" },
      { name: "Cross-functional Collaboration" },
    ],
  },
];

const skillOrder = ["AI & ML", "AI Lifecycle & Practices", "Lang's & Tools", "Backend", "Frontend"];
export const skills = [...allSkills].sort(
  (a, b) => skillOrder.indexOf(a.group) - skillOrder.indexOf(b.group)
);

export const education = [
  {
    title: "Bachelor's of Technology",
    marks: "CGPA 8.72/10",
    year: "2021-25",
    description:
      "Completed my Bachelor's of Technology in Artificial Intelligence and Machine Learning at GMR Institute of Technology.",
    img: gmr,
  },
  {
    title: "Intermediate",
    marks: "Percentage 96%",
    year: "2019-21",
    description: "Completed Higher Secondary Education from Sri Chaitanya Junior College.",
    img: chaitanya,
  },
  {
    title: "High School",
    marks: "CGPA 10/10",
    year: "2019",
    description: "Completed my High School from Sri Chaitanya techno School.",
    img: chaitanya,
  },
];


export const certifications = [
  { name: "Claude Certified Associate – Foundations", issuer: "Anthropic" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  { name: "Generative AI with Large Language Models (LLMs)", issuer: "DeepLearning.AI (Coursera)" },
  { name: "Joy of Computing using Python", issuer: "NPTEL" },
];
