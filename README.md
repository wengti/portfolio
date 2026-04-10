# Wong Weng Ti — Personal Portfolio

A personal portfolio website built with Next.js, showcasing projects, skills, and professional experience. Features a functional contact form powered by Resend.

**Live site:** https://wwt-portfolio.vercel.app/

## Tech Stack

- **Framework:** Next.js + React 19 + TypeScript
- **Styling:** Tailwind CSS, Framer Motion animations
- **UI:** Tailgrids
- **Email:** Resend with React Email templates

## Features

- **Home** — About section, featured projects grid, tech stack showcase, professional timeline
- **Projects** — Full project listing with live demo links, GitHub repos, and demo videos
- **Project Detail Pages** — Per-project gallery, feature breakdown, tech stack, and engineering challenges
- **Contact** — Email form with server-side handling via Resend
- Responsive design with dark theme and sticky scroll-aware header

## Key Learnings

- **Scroll-aware header with Framer Motion** — Implemented a header that hides on scroll down and reappears on scroll up, reclaiming vertical space for content — especially valuable on mobile viewports.

- **Resend + React Email templates** — Integrated email delivery via Resend. Initially expected to write templates with standard HTML and Tailwind CSS, but React Email requires its own component syntax and conventional inline CSS styles instead.

- **Tailgrids components** — Leveraged pre-built Tailgrids components (dropdown for the mobile hamburger menu, autoplay carousel for project galleries), significantly cutting down UI development time.
