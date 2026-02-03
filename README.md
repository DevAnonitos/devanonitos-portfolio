# Devanonitos Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, performance-first portfolio built with Next.js. This project focuses on clear storytelling, fast interactions, and UX patterns that help visitors understand value quickly and move toward a call-to-action.

## Table of Contents
- [Overview](#overview)
- [UX Principles](#ux-principles)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview
This portfolio is designed to be recruiter- and client-friendly. Each section is organized to emphasize outcomes, reduce friction, and keep content scannable across devices.

## UX Principles
- **Clarity before flair**: content hierarchy and spacing guide attention.
- **Fast by default**: optimized rendering for a responsive feel.
- **Accessible & inclusive**: semantic HTML, keyboard support, and readable contrast.
- **Conversion-ready**: clear CTAs and concise project summaries.

## Features
- Focused hero section that communicates role and value quickly.
- Project storytelling with context and outcomes.
- Responsive layout optimized for mobile, tablet, and desktop.
- Reusable UI components for consistency and faster iteration.

## Tech Stack
- **Next.js (App Router)** for routing and performance.
- **TypeScript** for maintainable, type-safe code.
- **Tailwind CSS** for consistent UI scales and rapid styling.

## Project Structure
```
app/            # Routes and pages
components/     # Reusable UI building blocks
constants/      # Static content and copy
hooks/          # Custom React hooks
lib/            # Utilities
public/         # Static assets
```

## Getting Started
Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts
```bash
npm run dev     # Start development server
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Lint project
```

## Customization
- Update content in `constants/` and page sections in `app/`.
- Add or refine UI patterns in `components/`.
- Keep text concise and outcome-focused for the best UX impact.

## Deployment
Deploy on [Vercel](https://vercel.com/new) for optimal Next.js performance.

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License
Distributed under the [MIT License](LICENSE).
