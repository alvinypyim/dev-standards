# Dev Standards

Status: Draft, not yet released

The single source of truth for how we write, check and ship code in this
project.  It is written for engineers and for AI agents.  Linters and CI
enforce what they can.  These documents cover everything else.

> This repository is public.  Do not commit credentials, API keys, PII,
> account IDs, client names or production data.

## Start here

- **AI agents:** read [AGENTS.md](AGENTS.md) first.  It holds the checklist to
  run before finishing any task.
- **Engineers:** read [code style](docs/04-code-style.md) and
  [tooling and enforcement](docs/05-tooling-and-enforcement.md).

## Rule tags

Every rule carries a tag:

- **[Required]** stated by the project owner.
- **[Proposed]** suggested during design and open to change.
- **[Open]** not yet decided.

## Contents

- [AGENTS.md](AGENTS.md): instructions for AI agents
- [Purpose and scope](docs/01-purpose-and-scope.md): who these are for
- [Technology stack](docs/02-technology-stack.md): language and runtime
- [Repositories](docs/03-repositories.md): layout and sharing rules
- [Code style](docs/04-code-style.md): formatting and Clean Code rules
- [Tooling and enforcement](docs/05-tooling-and-enforcement.md): tooling,
  hooks, CI, environment setup
- [AI behaviour](docs/06-ai-behaviour.md): rules for anything that calls a
  model
- [Security, privacy and authentication](docs/07-security-privacy-auth.md):
  security, privacy, legal, sign-in
- [Governance](docs/08-governance.md): versioning, open decisions, unverified
  items
- [configs/](configs/): example Prettier, EditorConfig and ESLint configs
- [CHANGELOG.md](CHANGELOG.md): release history

## Repository layout

```text
.
├── README.md
├── CHANGELOG.md
├── AGENTS.md
├── docs/
└── configs/
```

## Changing the standards

Change standards through pull requests with a short reason, and add an entry
to [CHANGELOG.md](CHANGELOG.md).  See [governance](docs/08-governance.md).

This is not legal advice.
