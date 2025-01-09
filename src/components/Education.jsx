import React from 'react';
import { Container} from 'react-bootstrap';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const educationData = [

    { year: "2021-25", title: "Bachelor's of Technology ",marks :"CGPA 8.6/10", description: "Currently pursuing my Bachelor's of Technology in the stream of Artificial Intelligence and Machine Learning at GMR Intitute of Technology" },

    { year: "2019-21", title: "Intermediate",marks:"Percentage 96%", description: "Completed Higher Secondary Education from Sri Chaitanya Junior College." },
    
    { year: "2019", title: "High School",marks:"CGPA 10/10", description: "Completed my High School from Sri Chaitanya techno School." },
    
   
];

const Education = () => {
    return (
        <div className='education' id='education'>

            <Container className="education-journey pb-5 ">
                <h1 className="head pt-4 pb-4">Education</h1>
                <div className="timeline ps-5 ms-5 m-0">
                    {educationData.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-stoppage">
                                <span className="year fs-5 align-bottom">{item.year}</span>
                                <TaskAltIcon className='mb-1 ms-1'/>
                            </div>
                            <div className="timeline-content  m-4 mb-5 p-3 px-4 animate__animated animate__fadeIn">
                                <h4 className='fs-5 mb-0'>{item.title} -  <span className='text-light'>{item.marks}</span></h4>
                                <p className='m-0'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Education;
