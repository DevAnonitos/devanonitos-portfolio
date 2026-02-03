# Contributing Guide

Thank you for your interest in contributing to this project! This document outlines the workflow and professional best practices for collaborators.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Workflow](#workflow)
- [Coding Standards](#coding-standards)
- [Commits & Pull Requests](#commits--pull-requests)
- [Testing](#testing)
- [Bug Reports & Feature Requests](#bug-reports--feature-requests)
- [Security](#security)
- [License](#license)

## Code of Conduct
Please be professional, respectful, and constructive. We strive for a welcoming and collaborative environment.

## Getting Started
1. Fork the repository and create a new branch from `main`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Workflow
- Name branches using: `feature/<feature-name>`, `fix/<issue-name>`, `chore/<description>`.
- Keep your branch up to date with `main`.
- Keep changes small and focused to simplify review.

## Coding Standards
- Write clear, readable, and maintainable code.
- Follow the existing project structure and style guide.
- Never commit sensitive information.
- Use ESLint/Prettier as configured in the project.

## Commits & Pull Requests
### Commits
- Follow Conventional Commits:
  - `feat:` new feature
  - `fix:` bug fix
  - `docs:` documentation updates
  - `chore:` maintenance tasks
- Example:
  ```bash
  git commit -m "feat: add hero section"
  ```

### Pull Requests
- Clearly describe the problem, solution, and impact.
- Attach screenshots for UI changes.
- Ensure tests pass before opening a PR.

## Testing
Run the following before opening a PR:
```bash
npm run lint
npm test
```

## Bug Reports & Feature Requests
- Open an issue with clear details.
- Include steps to reproduce when reporting bugs.
- Suggest an improvement or solution when possible.

## Security
If you discover a security issue, please follow the guidance in `SECURITY.md` and report it through the designated channel.

## License
By contributing, you agree that your contributions are released under the license in `LICENSE`.
