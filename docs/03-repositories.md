# Repositories

A project is split into several repositories, plus shared ones so code is
not repeated.

## Shared repositories

- **[Required]**
  [`nvm-yarn-kit`](https://github.com/alvinypyim/nvm-yarn-kit): Bash scripts
  that run a project with the pinned Node and package manager.
- **[Proposed]** `shared-types`: shared TypeScript types and schemas.
- **[Proposed]** `dev-config`: shared ESLint, Prettier and EditorConfig
  settings.
- **[Proposed]** `ci-templates`: reusable GitHub Actions workflows.
- **[Open]** This standards repository's name.  It is currently
  `dev-standards`.  An earlier suggestion was `engineering-standards`.

## Rules

- Do not extract code into a shared repository until two places use it.
- Version shared packages with semantic versions and publish them to a
  private registry.  Keep registry tokens in CI secrets only.
- Treat `shared-types` like a public API.  Keep changes backwards compatible
  where possible.
- Avoid Git submodules.
- If the team is small at the start, one repository with separate folders is
  acceptable.  Split later.
