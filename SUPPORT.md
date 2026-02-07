# SUPPORT

> This document explains how to get help, report bugs, request features, and follow this project's support process using professional open-source standards.

## Quick Summary
- ✅ Preferred channel for bugs and feature requests: **GitHub Issues**.
- 🔐 Security issues: **do not open public issues**; follow [SECURITY.md](SECURITY.md).
- 💬 Usage questions: use **GitHub Discussions** (or an equivalent community channel).
- ⏱️ Maintainer responses are **best-effort** unless a separate support agreement exists.

---

## 1) Support Scope

### We Support
- Installation and environment setup issues.
- Reproducible bugs on currently maintained versions.
- Clarification of documented behavior.
- Guidance on contribution workflow.

### Out of Scope (or Limited Support)
- Heavily customized forks that diverge significantly from `main`.
- Deprecated or unmaintained versions.
- Unrelated third-party integration consulting.
- SLA-style urgent support without a dedicated agreement.

---

## 2) Supported Versions

| Version | Status | Notes |
|---|---|---|
| `main` | ✅ Active | Primary branch for ongoing updates |
| Latest release | ✅ Supported | Bug fixes and documentation clarification |
| Older releases | ⚠️ Best effort | Upgrade may be required first |

> Recommendation: reproduce the issue on the latest release or `main` before opening a support request.

---

## 3) Support Channels

### A. Bug Reports (Preferred)
- Open an issue in **GitHub Issues**.
- Include a **minimal reproducible example**.
- Use the issue template when available.

### B. Feature Requests
Open a **Feature Request** issue with:
- The problem statement.
- Proposed solution.
- Alternatives considered.
- Expected impact and risks.

### C. Usage Questions
- Use **GitHub Discussions** (Q&A category).
- Be specific: what you tried, what happened, and what you expected.

### D. Security Reports
- Follow [SECURITY.md](SECURITY.md).
- Do not disclose vulnerabilities in public issues/discussions.

---

## 4) High-Quality Support Request Checklist

To help maintainers respond faster, include:

1. **Environment**
   - OS + version
   - Node.js / package manager version
   - Browser version (for UI issues)

2. **Project Context**
   - Commit SHA or release tag
   - Any local modifications

3. **Reproduction Steps**
   - Exact commands
   - Sample input/config
   - Expected vs actual behavior

4. **Evidence**
   - Logs / stack traces (with sensitive data removed)
   - Screenshots/GIFs (for UI bugs)
   - Links to related issues

5. **Impact**
   - Is it blocking production, development, or only edge cases?

---

## 5) Response & Triage Policy

- All issues are handled on a **best-effort** basis.
- Typical first-response targets:
  - Critical/security: as soon as possible via the security channel.
  - Standard bug/question: within **3–7 business days**.
- Priority depends on:
  - Reproducibility
  - User impact
  - Roadmap alignment
  - Maintainer availability

> No default SLA is provided without a separate support contract.

---

## 6) Labels and Issue Lifecycle (Recommended)

### Suggested Labels
- `type:bug`, `type:question`, `type:feature`
- `status:needs-repro`, `status:needs-info`, `status:confirmed`
- `priority:high`, `priority:medium`, `priority:low`
- `good first issue`, `help wanted`

### Issue Lifecycle
1. Intake
2. Triage
3. Reproduce
4. Prioritize
5. Resolve or close with clear rationale

---

## 7) Community Conduct

- Be respectful, constructive, and focused on technical outcomes.
- If present, follow `CODE_OF_CONDUCT.md`.

Maintainers may close issues when:
- Required information is missing after follow-up.
- The issue is duplicate or out of scope.
- The behavior is expected and already documented.

---

## 8) Reusable Short Template

```md
# SUPPORT

## How to get help
- Bugs: GitHub Issues
- Questions: GitHub Discussions
- Security: SECURITY.md or security@your-project.dev

## Supported versions
| Version | Supported |
|---|---|
| latest | ✅ |
| older  | ⚠️ best effort |

## What to include
- Environment details
- Steps to reproduce
- Expected vs actual behavior
- Logs/screenshots

## Response policy
- Best effort, no SLA by default.
- Typical first response: 3–7 business days.
```

---

## 9) Maintainer Recommendations

To run support professionally at scale, consider adding:
- Issue templates + issue forms.
- A bug report checklist.
- Public roadmap/milestones for feature request expectations.
- Automation (labeler, stale bot, triage workflows).

Thank you for helping improve this project.
