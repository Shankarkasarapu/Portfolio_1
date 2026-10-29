import { skills } from "../data";
import Reveal from "./Reveal";

const Skills = () => (
  <section className="block" id="skills" aria-label="Skills">
    <Reveal>
      <h2 className="block__title">Technical Skillset</h2>
    </Reveal>
    <div className="skills">
      {skills.map((g, i) => (
        <Reveal key={g.group} delay={i * 50} className="skills__group">
          <h3 className="skills__label">{g.group}</h3>
          <ul className="chips">
            {g.items.map((s) => (
              <li key={s.name}>
                {s.logo && <img src={s.logo} alt="" width="18" height="18" />}
                {s.name}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Skills;
