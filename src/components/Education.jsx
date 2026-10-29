import { education, certifications } from "../data";
import Reveal from "./Reveal";

const Education = () => (
  <section className="block" id="education" aria-label="Education and certifications">
    <Reveal>
      <h2 className="block__title">Education &amp; Certifications</h2>
    </Reveal>

    <ol className="rows">
      {education.map((e, i) => (
        <Reveal as="li" key={e.title} delay={i * 60} className="row">
          <img className="logo" src={e.img} alt="" width="44" height="44" />
          <div>
            <h3>{e.title} <span className="accent">· {e.marks}</span></h3>
            <p className="muted">{e.description}</p>
          </div>
          <span className="tag">{e.year}</span>
        </Reveal>
      ))}
    </ol>

    <Reveal>
      <h3 className="skills__label certs__label">Certifications</h3>
      <ul className="certs">
        {certifications.map((c) => (
          <li key={c.name}>
            <span className="certs__tick" aria-hidden="true">✓</span>
            <span><strong>{c.name}</strong> <span className="muted">· {c.issuer}</span></span>
          </li>
        ))}
      </ul>
    </Reveal>
  </section>
);

export default Education;
