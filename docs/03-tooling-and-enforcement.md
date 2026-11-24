# Tooling and enforcement

Tool choices, commands and environment setup belong to each language section.
See the [overview](01-overview.md#languages).

## Enforcement

- **Before committing:** run the language's lint, format and type check
  commands and fix every failure.
- **CI (the real gate):** every pull request runs the language's checks and
  tests.  A failure blocks merging.
- AI-written code passes the same gates and the same human review as any
  other code.

## Repositories

A project is split into several repositories, plus shared ones so code is
not repeated.

- Do not extract code into a shared repository until two places use it.
- Version shared packages with semantic versions and publish them to a
  private registry.  Keep registry tokens in CI secrets only.
- Avoid Git submodules.
- If the team is small at the start, one repository with separate folders is
  acceptable.  Split later.
