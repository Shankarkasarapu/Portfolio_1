// import React from 'react';
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import awetecks from '../assets/img/Experience/aweteck_services_logo.jpeg';
// import forage from '../assets/img/Experience/Forage icon.png';
// import { Container } from 'react-bootstrap';

// const Experience = () => {
//   const experiences = [
//     {
//       title: 'MERN FullStack Web Developer',
//       company: 'Aweteck Services Pvt Ltd',
//       date: 'August 2024 - November 2024',
//       icon: awetecks,

//     },
//     {
//       title: 'Data Analytics and Visualization Intern',
//       company: 'Accenture (Forage)',
//       date: 'April 2024',
//       icon: forage,
//     },
//   ];

//   return (
//     <div className="experience p-5 pt-0" id="Experience" >
//       <Container>
//         <h1 className="head pb-2 text-center text-white m-0">Experience</h1>
//         <div className='mb-5' style={{
//           width: "112px",
//           height: "4px",
//           background: "#4f818fff",
//           margin: "0 auto 16px auto",
//           borderRadius: "2px"
//         }}></div>
//         <VerticalTimeline className="py-5">
//           {experiences.map((experience, index) => (
//             <VerticalTimelineElement
//               key={index}
//               className="vertical-timeline-element--work"
//               contentStyle={{
//                 background: 'linear-gradient(to right, rgba(40, 37, 37, 0.4)50%, rgba(214, 192, 92, 0.4))',
//                 color: '#fff',

//               }}
//               contentArrowStyle={{
//                 borderRight: '7px solid rgb(166, 168, 173)',
//               }}
//               date={experience.date}
//               iconStyle={{
//                 background: '#fff',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//               icon={
//                 <div className="text-center">
//                   <img
//                     src={experience.icon}
//                     alt={`${experience.title} icon`}
//                     style={{
//                       background: '#fff',
//                       objectFit: 'contain',
//                       borderRadius: '50%',
//                       padding: '1.3px',
//                     }}
//                   />
//                 </div>
//               }
//             >
//               <h3
//                 className="vertical-timeline-element-title"
//                 style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Comic Neue' }}
//               >
//                 {experience.title}
//               </h3>
//               <p
//                 className="vertical-timeline-element-subtitle"
//                 style={{
//                   fontSize: '16px',
//                   fontWeight: '600',
//                   fontFamily: 'Comic Neue',
//                   color: 'rgb(231, 207, 100)',
//                 }}
//               >
//                 {experience.company}
//               </p>
//             </VerticalTimelineElement>
//           ))}
//         </VerticalTimeline>
//       </Container>
//     </div>
//   );
// };

// export default Experience;
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import awetecks from '../assets/img/Experience/aweteck_services_logo.jpeg';
import forage from '../assets/img/Experience/Forage icon.png';
import { Container } from 'react-bootstrap';

const experiences = [
  {
    title: 'MERN FullStack Web Developer',
    company: 'Aweteck Services Pvt Ltd',
    date: 'August 2024 - November 2024',
    icon: awetecks,
  },
  {
    title: 'Data Analytics and Visualization Intern',
    company: 'Accenture (Forage)',
    date: 'April 2024',
    icon: forage,
  },
];

const Experience = () => (
  <div
    className="experience p-0 p-md-5 pt-0 "
    id="Experience"
    style={{
      clipPath: "polygon(0 6%, 100% 0, 100% 100%, 0 100%)",
      background: "#1b1a1aff",
    }}
  >
    <Container className='p-5'>
      <h1 className="head pb-2 text-center text-white m-0">Experience</h1>
      <div className='mb-5' style={{
        width: "112px",
        height: "4px",
        background: "#4f818fff",
        margin: "0 auto 16px auto",
        borderRadius: "2px"
      }}></div>
      <VerticalTimeline className="py-5">
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              color: '#fff',
            }}
            contentArrowStyle={{
              borderRight: '7px solid #d6c05c',
            }}
            date={experience.date}
            iconStyle={{
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 16px rgba(214,192,92,0.18)',
            }}
            icon={
              <img
                src={experience.icon}
                alt={`${experience.title} icon`}
                className="timeline-bounce-icon"
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              {experience.title}
            </h3>
            <p className="vertical-timeline-element-subtitle">
              {experience.company}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  </div>
);

export default Experience;