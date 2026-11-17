# Repositories

A project is split into several repositories, plus shared ones so code is
not repeated.

## Shared repositories

- **[Required]** `nvm-yarn-kit`: Bash scripts that run a project with the
  pinned Node and package manager.
- **[Open]** This standards repository's name.  It is currently
  `dev-standards`.  An earlier suggestion was `engineering-standards`.

## Rules

- Do not extract code into a shared repository until two places use it.
- Version shared packages with semantic versions and publish them to a
  private registry.  Keep registry tokens in CI secrets only.
- Avoid Git submodules.
- If the team is small at the start, one repository with separate folders is
  acceptable.  Split later.
