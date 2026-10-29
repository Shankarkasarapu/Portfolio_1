# Portfolio

Personal portfolio of Gowri Sankar Kasarapu, built with React and Vite.

## Features

- Two-column layout: a sticky sidebar (about 19% wide) and a scrolling content area.
- After scrolling past the hero, the sidebar dims and shrinks slightly so the content stands out. Hovering or focusing it restores it.
- Auto-align: when scrolling settles and more than half of a section is on screen, the page glides (eased, interruptible) so that section's heading sits at the top.
- Section headings slide in with an animated underline as each section becomes active.
- Respects `prefers-reduced-motion`: animations are shortened or disabled, and alignment jumps instead of gliding.

## Run locally

    npm install
    npm run dev

## Build

    npm run build
