import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "../data";
import Reveal from "./Reveal";

// Original vertical timeline (one-column variant to fit the content column), themed via CSS variables.
const Experience = () => (
  <section className="block experience" id="experience" aria-label="Experience">
    <Reveal>
      <h2 className="block__title">Experience</h2>
    </Reveal>

    <VerticalTimeline layout="1-column-left" className="vt" lineColor="var(--line)">
      {experience.map((job) => (
        <VerticalTimelineElement
          key={job.company}
          className="vertical-timeline-element--work"
          contentStyle={{ color: "var(--text)" }}
          contentArrowStyle={{ borderRight: "7px solid var(--accent)" }}
          date={job.date}
          iconStyle={{
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 16px rgba(232,196,90,0.3)",
          }}
          icon={
            job.icon ? (
              <img src={job.icon} alt={`${job.company} logo`} className="timeline-bounce-icon" />
            ) : (
              <span className="timeline-initial">{job.company[0]}</span>
            )
          }
        >
          <h3 className="vertical-timeline-element-title">{job.role}</h3>
          <p className="vertical-timeline-element-subtitle">
            {job.company}{job.place ? ` · ${job.place}` : ""}
          </p>
          {job.points.length > 0 && (
            <ul className="bullets">
              {job.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          )}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </section>
);

export default Experience;
