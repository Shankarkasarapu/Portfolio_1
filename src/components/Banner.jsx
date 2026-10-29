import bannerimg from "../assets/img/header-img.png";
import { profile } from "../data";
import Reveal from "./Reveal";

// "About" block: the personal intro, photo and headline numbers
const Banner = () => (
  <section className="block" id="about" aria-label="About">
    <Reveal>
      <h2 className="block__title">About</h2>
      <div className="about">
        <div className="about__text">
          <p className="lead">
            <strong>Hi, I'm Shankar.</strong> {profile.headline}
            {profile.summary}
          </p>
          <p className="lead">
            Right now I'm an <b>Associate System Engineer at IBM</b>, working in Agile teams on enterprise
            applications, while I keep building ML and GenAI projects on the side.
          </p>
          <div className="actions">
            <a className="btn btn--hl-outline" href={profile.resume} target="_blank" rel="noopener noreferrer">View Resume <span aria-hidden="true">↗</span></a>
            <a className="btn btn--hl-outline" href="#projects">See my work</a>
          </div>
        </div>
        <figure className="about__photo">
          <img src={bannerimg} alt="Gowri Sankar" />
        </figure>
      </div>

      <ul className="stats">
        {profile.stats.map((s) => (
          <li key={s.label}>
            <b className="grad-text">{s.value}</b>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  </section>
);

export default Banner;




