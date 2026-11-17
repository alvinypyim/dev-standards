# Changelog

All notable changes to these standards are recorded here.  The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Conventional Commits as the commit message standard, with examples and the
  link to semantic versions.  Commit messages are the first line only, with
  no body or footers.  AI agents are not credited in commits, because the
  person who commits takes full responsibility.

### Changed

- Removed content that only applied to the ambient AI personal assistant
  project, so the standards are general.  This covers the project
  description, the application repositories, the audio and calendar
  architecture, the proposal workflow, recording law, Google sign-in and
  calendar scopes, and the US and Hong Kong regions.
- Renamed `docs/01-project-context.md` to `docs/01-purpose-and-scope.md`.
- Removed AWS serverless, AWS CDK, Zod and the Sydney region, which were
  specific to that project.  The architecture document is gone.  Least
  privilege, secrets management and UTC time storage moved into the security
  and code style documents.  Later documents were renumbered.
- Removed the remaining AWS references (Bedrock inference profiles and IAM
  wording).  The standards no longer name any cloud provider.
- Removed the Privacy Act and Australian data residency references from the
  security document.
- Removed the organisation-specific reference from the open decisions.
- Environment setup now describes what `nvm-yarn-kit` does today.  It does
  not install nvm or Git hooks, and it is used by cloning a tagged release.
- Linked `nvm-yarn-kit` from the repositories document.
- Marked Windows support for the kit as open.
- Replaced the `package.json` `scripts` example with a rule that
  repositories define no `scripts`.  Tools run through `nvm-yarn-kit`, and
  the agent checklist uses the same commands.

## [0.1.0] - 2026-11-17

### Added

- Initial draft of the engineering standards, split into topic documents
  under `docs/`.
- Purpose, technology stack and repository layout.
- Code style rules: formatting, exceptions and Clean Code limits.
- Tooling, enforcement and environment setup (`nvm-yarn-kit`).
- Architecture, multi-region and time handling.
- AI behaviour rules and AI agent instructions (`AGENTS.md`).
- Security, privacy, legal and authentication rules.
- Governance, open decisions and not-yet-verified items.
- Example Prettier, EditorConfig and ESLint configs under `configs/`.  These
  have not been run.

[Unreleased]: https://github.com/alvinypyim/dev-standards/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/alvinypyim/dev-standards/releases/tag/v0.1.0
