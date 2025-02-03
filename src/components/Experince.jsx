import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import mern from '../assets/img/Experience/aweteck_services_logo.jpeg';
import forage from '../assets/img/Experience/Forage icon.png';
import { Container } from 'react-bootstrap';

const Experience = () => {
  const experiences = [
    {
      title: 'MERN FullStack Web Developer',
      company: 'Aweteck Services Pvt Ltd',
      date: 'August 2024 - November 2024',
      icon: mern,
    },
    {
      title: 'Data Analytics and Visualization Intern',
      company: 'Accenture (Forage)',
      date: 'April 2024',
      icon: forage,
    },
  ];

  return (
    <div className="p-5" id="Experience">
      <Container>
        <h1 className="head pb-5 text-start text-white m-0">Work Experience</h1>
        <VerticalTimeline className="py-5">
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'linear-gradient(to right, rgba(93, 182, 207, 0.4), rgba(214, 192, 92, 0.4))',
                color: '#fff',
                
              }}
              contentArrowStyle={{
                borderRight: '7px solid rgb(166, 168, 173)',
              }}
              date={experience.date}
              iconStyle={{
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              icon={
                <div className="text-center">
                  <img
                    src={experience.icon}
                    alt={`${experience.title} icon`}
                    style={{
                      background:'#fff',
                      objectFit: 'contain',
                      borderRadius:'50%',
                      padding:'1.3px',
                    }}
                  />
                </div>
              }
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Comic Neue' }}
              >
                {experience.title}
              </h3>
              <p
                className="vertical-timeline-element-subtitle"
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  fontFamily: 'Comic Neue',
                  color: 'rgb(231, 207, 100)',
                }}
              >
                {experience.company}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </div>
  );
};

export default Experience;
