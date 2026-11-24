# Changelog

All notable changes to these standards are recorded here.  The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Added

- Java, .NET and Rust sections under `docs/languages/`, with example configs
  and a `bin/exec` for each under `configs/`.  These have not been run.
- Python section in `docs/languages/python.md`, with example `pyproject.toml`,
  EditorConfig and `bin/exec` under `configs/python/`.  Python projects use
  uv through the same `bin/exec` entry point.  These have not been run.

### Changed

- Moved all TypeScript rules into `docs/languages/typescript.md`.  This
  covers quotes, braces, trailing commas, Prettier, ESLint, `bin/exec`,
  `nvm-yarn-kit` and enforcement commands.  JavaScript is not a separate
  option.
- Moved the example configs into `configs/typescript/`.
- Made the overview, code style and tooling documents language-neutral.
- Language rules are now optional features that a project selects.
- Removed remaining language-specific wording from `AGENTS.md`, code style
  and governance.  Language open decisions now live in each language section.

## 0.1.0 - 2026-11-17

### Added

- Initial draft of the engineering standards, split into five documents
  under `docs/`.
- Overview: purpose, scope, rule tags and technology stack.
- Code style rules: formatting, dates and times, exceptions and Clean Code
  limits.
- Tooling, enforcement, environment setup and repository rules.
  Repositories define no `scripts` in `package.json` and run tools through
  the project's `bin/exec` script, which calls `nvm-yarn-kit`.
- AI behaviour, security and privacy rules, and AI agent instructions
  (`AGENTS.md`).
- Governance, commit rules, open decisions and not-yet-verified items.
- Conventional Commits as the commit message standard.  Commit messages are
  the first line only, with no body or footers.  AI agents are not credited
  in commits, because the person who commits takes full responsibility.
- Two spaces after each sentence, in code comments and Markdown prose.
- Example `.prettierignore` in `configs/`.  It excludes Markdown so Prettier
  keeps the two spaces after each sentence.
- MIT licence.
- Example Prettier, EditorConfig and ESLint configs under `configs/`.  These
  have not been run.
