import { useEffect, useState } from "react";
import { profile } from "../data";
import ThemeToggle from "./ThemeToggle";
import linkedin from "../assets/img/Footer/Connect icons/nav-icon1.svg";
import githubIcon from "../assets/img/Footer/Connect icons/nav-icon2.svg";
import leet from "../assets/img/Footer/Connect icons/leetcode.svg";
import instagram from "../assets/img/Footer/Connect icons/nav-icon3.svg";

const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Connect", "#connect"],
];

const icons = { GitHub: githubIcon, LinkedIn: linkedin, LeetCode: leet, Instagram: instagram };

const useTypewriter = (words) => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = words[i];
    let delay = deleting ? 60 : 120;
    if (!deleting && text === full) delay = 1400;
    if (deleting && text === "") delay = 350;
    const t = setTimeout(() => {
      if (!deleting && text === full) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setI((i + 1) % words.length);
      }
      setText(full.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return text;
};

// Sticky left sidebar: identity, rotating roles, section nav, socials
export const NavBar = () => {
  const typed = useTypewriter(profile.roles);
  const [active, setActive] = useState("#about");

  // Once the visitor scrolls off the landing view, the sidebar glides left and keeps only the nav
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    // Hysteresis (collapse > 160px, expand < 30px) so the layout change can't flip itself back and forth
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      if (y > 160) root.dataset.compact = "true";
      else if (y < 30) delete root.dataset.compact;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      delete root.dataset.compact;
    };
  }, []);

  useEffect(() => {
    const sections = links.map(([, href]) => document.querySelector(href)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
    <div className="connect-wrap">
      <a className="btn connect-fab" href="#connect">Let's Connect <span aria-hidden="true">→</span></a>
    </div>
    <header className="side">
      <div className="side__top">
        <div className="side__id">
          <p className="side__eyebrow"><span className="live-dot" /> Open to AI / ML roles</p>
          <h1 className="side__name"><a href="#about">Gowri Sankar<br />Kasarapu</a></h1>
          <h2 className="side__role grad-text">
            {typed}<i className="caret" aria-hidden="true" />
          </h2>
          <p className="side__blurb">
            I turn data into models that work, and ideas into products people can use.
          </p>
        </div>

        <nav className="side__nav" aria-label="Sections">
          <ul>
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} className={active === href ? "is-active" : ""}>
                  <span className="side__line" />
                  <span className="side__label">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="side__bottom">
        <ul className="social">
          {profile.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label} title={l.label}>
                <img src={icons[l.label]} alt="" />
              </a>
            </li>
          ))}
          <li><ThemeToggle /></li>
        </ul>
        
      </div>
    </header>
    </>
  );
};

export default NavBar;








