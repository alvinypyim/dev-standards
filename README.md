# Dev Standards

The single source of truth for how we write, check and ship code in this
project.  It is written for engineers and for AI agents.  Linters and CI
enforce what they can.  These documents cover everything else.

> This repository is public.  Do not commit credentials, API keys, PII,
> account IDs, client names or production data.

## Start here

- **AI agents:** read [AGENTS.md](AGENTS.md) first.  It holds the checklist to
  run before finishing any task.
- **Engineers:** read [code style](docs/02-code-style.md), then the
  [language sections](docs/01-overview.md#languages) your project uses.

## Rule tags

Every rule carries a tag:

- **[Required]** stated by the project owner.
- **[Proposed]** suggested during design and open to change.
- **[Open]** not yet decided.

## Contents

- [AGENTS.md](AGENTS.md): instructions for AI agents
- [Overview](docs/01-overview.md): purpose, scope, rule tags and languages
- [Code style](docs/02-code-style.md): language-neutral formatting and Clean
  Code rules
- [Tooling and enforcement](docs/03-tooling-and-enforcement.md): CI gate and
  repositories
- [TypeScript](docs/languages/typescript.md): formatting, tooling,
  enforcement and environment setup
- [AI, security and privacy](docs/04-ai-security-and-privacy.md): rules for
  anything that calls a model, plus security and privacy
- [Governance](docs/05-governance.md): versioning, commits, open decisions,
  unverified items
- [configs/](configs/): example configs, one folder per language
- [CHANGELOG.md](CHANGELOG.md): release history

## Repository layout

```text
.
├── README.md
├── CHANGELOG.md
├── AGENTS.md
├── LICENSE
├── docs/
│   └── languages/
└── configs/
    └── typescript/
```

## Changing the standards

Change standards through pull requests with a short reason, and add an entry
to [CHANGELOG.md](CHANGELOG.md).  See [governance](docs/05-governance.md).

## Licence

Released under the [MIT licence](LICENSE).

This is not legal advice.
