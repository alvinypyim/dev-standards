# Changelog

All notable changes to these standards are recorded here.  The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Nothing has been released yet.

## Unreleased

### Added

- Initial draft of the engineering standards, split into topic documents
  under `docs/`.
- Purpose and scope, technology stack and repository layout.
- Code style rules: formatting, dates and times, exceptions and Clean Code
  limits.
- Tooling, enforcement and environment setup.  Repositories define no
  `scripts` in `package.json` and run tools through the project's
  `bin/exec` script, which calls `nvm-yarn-kit`.
- AI behaviour rules and AI agent instructions (`AGENTS.md`).
- Security, privacy, legal and authentication rules.
- Governance, commit rules, open decisions and not-yet-verified items.
- Conventional Commits as the commit message standard.  Commit messages are
  the first line only, with no body or footers.  AI agents are not credited
  in commits, because the person who commits takes full responsibility.
- Example Prettier, EditorConfig and ESLint configs under `configs/`.  These
  have not been run.
