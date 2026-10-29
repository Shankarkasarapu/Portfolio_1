import { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Experience from './components/Experince';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import LetsConnect from './components/LetsConnect';
import Footer from './components/Footer';

function App() {
  // Cursor spotlight (fine pointers only)
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const root = document.documentElement;
    const move = (e) => {
      root.style.setProperty('--mx', `${e.clientX}px`);
      root.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  // Mark the section nearest the top of the viewport as active (drives heading animation)
  useEffect(() => {
    const blocks = document.querySelectorAll('.block');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle('is-active', e.isIntersecting));
      },
      { rootMargin: '-15% 0px -45% 0px' }
    );
    blocks.forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, []);

  // Once the user scrolls past the hero, soften the sidebar so the content takes focus
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => root.classList.toggle('is-scrolled', window.scrollY > 120);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Once scrolling settles, if a section's top edge has crossed into the upper half of the
  // screen (i.e. more than half of it is showing), glide it up so its heading sits at the top.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const offset = 64; // matches scroll-padding-top: 4rem
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    let timer;
    let raf = 0;
    let animating = false;
    let touching = false;

    const stop = () => {
      cancelAnimationFrame(raf);
      animating = false;
    };

    // Own the animation (rAF + easing) so it is not fought by CSS smooth-scroll,
    // and so any user input can cancel it instantly.
    const glideTo = (y) => {
      const from = window.scrollY;
      const dist = y - from;
      if (Math.abs(dist) < 4) return;
      if (reduce) return window.scrollTo({ top: y, behavior: 'instant' });
      const dur = Math.min(900, 450 + Math.abs(dist) * 0.6);
      const start = performance.now();
      animating = true;
      const step = (now) => {
        const t = Math.min(1, (now - start) / dur);
        window.scrollTo({ top: from + dist * ease(t), behavior: 'instant' });
        if (t < 1) raf = requestAnimationFrame(step);
        else animating = false;
      };
      raf = requestAnimationFrame(step);
    };

    const align = () => {
      if (animating || touching) return;
      const vh = window.innerHeight;
      const target = [...document.querySelectorAll('.block')].find((b) => {
        const top = b.getBoundingClientRect().top;
        return top > offset + 8 && top <= vh * 0.5;
      });
      if (!target) return;
      glideTo(target.getBoundingClientRect().top + window.scrollY - offset);
    };

    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(align, 220); // wait until scrolling/momentum has really settled
    };
    const onScroll = () => {
      if (!animating) schedule();
    };
    const onUserInput = () => {
      stop();
      schedule();
    };
    const onTouchStart = () => {
      touching = true;
      onUserInput();
    };
    const onTouchEnd = () => {
      touching = false;
      schedule();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onUserInput, { passive: true });
    window.addEventListener('keydown', onUserInput);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      stop();
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onUserInput);
      window.removeEventListener('keydown', onUserInput);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <>
      <div className="spotlight" aria-hidden="true" />
      <div className="shell">
        <NavBar />
        <main className="content">
          <Banner />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <LetsConnect />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
