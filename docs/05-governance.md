# Governance

## Versioning and change

- Tag releases with semantic versions, for example `v1.0.0`.
- Record every change in [CHANGELOG.md](../CHANGELOG.md).
- Change standards through pull requests with a short reason.
- Projects record which standards version they follow.
- Keep these documents concise.  Do not duplicate lint rules in prose beyond
  what is needed to explain them.

## Commits

- **[Required]** Write commit messages as
  [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
- **[Required]** A commit message is the first line only.  Do not add a body
  or footers.
- **[Required]** Do not credit an AI agent in a commit.  Omit the
  `Co-authored-by` line in every commit and in the project.  The person who
  makes the commit takes full responsibility for it.
- Format: `type(scope): description`.  The scope is optional.
- **[Proposed]** Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`,
  `test`, `build`, `ci`, `chore` and `revert`.
- **[Proposed]** Write the description in the imperative mood, in lower
  case, with no full stop, and keep the first line to 72 characters.
- Mark a breaking change with `!` after the type or scope.  Do not use a
  `BREAKING CHANGE:` footer, because commits have no footers.
- Types map to semantic versions: `fix` is a patch, `feat` is a minor and a
  breaking change is a major.
- Put the reasoning in the pull request description, not the commit.
- **[Proposed]** Check commit messages in CI with a Conventional Commits
  checker such as commitlint.  Use the same rule for pull request titles when
  merging by squash.

Examples:

```text
feat(parser): add streaming support
fix: handle empty input in the parser
docs: update the tooling section
feat!: drop support for the v1 API
```

## Open decisions

- Open decisions for each language are listed in its section.
- The name of this repository.

## Not yet verified

- The example configs for every language have not been run.
- Model availability needs checking against current documentation.
