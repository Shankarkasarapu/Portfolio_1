import { useState } from "react";
import { projects } from "../data";
import Reveal from "./Reveal";

const ProjectCard = ({ p, index }) => {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const n = p.images.length;

  return (
    <Reveal as="article" delay={index * 70} className={`project ${n ? "" : "project--text"}`}>
      {n > 0 && (
        <div className="slider">
          <div className="slider__track" style={{ transform: `translateX(-${slide * 100}%)` }}>
            {p.images.map((src, i) => (
              <img key={i} src={src} alt={`${p.title} screenshot ${i + 1}`} loading="lazy" />
            ))}
          </div>
          {n > 1 && (
            <>
              <button className="slider__btn slider__btn--prev" aria-label="Previous image" onClick={() => setSlide((slide - 1 + n) % n)}>‹</button>
              <button className="slider__btn slider__btn--next" aria-label="Next image" onClick={() => setSlide((slide + 1) % n)}>›</button>
              <div className="slider__dots">
                {p.images.map((_, i) => (
                  <button key={i} aria-label={`Image ${i + 1}`} className={i === slide ? "is-on" : ""} onClick={() => setSlide(i)} />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <div className="project__body">
        <p className="project__kind">
          {p.kind}
          {p.metric && <span className="tag">{p.metric}</span>}
        </p>
        <h3>{p.title}</h3>
        <p className={`muted project__desc ${open ? "is-open" : ""}`}>{p.description}</p>
        <ul className="chips chips--sm">
          {p.stack.split(",").map((s) => <li key={s}>{s.trim()}</li>)}
        </ul>
        <div className="project__actions">
          <button className="link-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
            {open ? "See less" : "See more"}
          </button>
          {p.demo ? (
            <a className="link-btn" href={p.demo} target="_blank" rel="noopener noreferrer">
              {p.demoLabel || "Demo"} ↗
            </a>
          ) : (
            <span className="muted project__nodemo">No demo</span>
          )}
        </div>
      </div>
    </Reveal>
  );
};

const Projects = () => (
  <section className="block" id="projects" aria-label="Projects">
    <Reveal>
      <h2 className="block__title">Projects</h2>
    </Reveal>
    <div className="projects">
      {projects.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
    </div>
  </section>
);

export default Projects;
