# Tooling and enforcement

## Tooling configuration

ESLint owns code quality.  Prettier owns formatting.  EditorConfig covers file
types the other two do not (shell scripts, Dockerfiles and similar).

These configs have not been run.  Test them on a small sample repository and
check the current typescript-eslint, Prettier and editorconfig-checker docs.

Example files live in [configs/](../configs/):

- [.prettierrc.json](../configs/.prettierrc.json)
- [.editorconfig](../configs/.editorconfig)
- [eslint.config.js](../configs/eslint.config.js)

Notes:

- Set Prettier's `trailingComma` explicitly.  Prettier 3 defaults to adding
  trailing commas everywhere.
- In the ESLint config, the `prettier` entry comes before the project rules
  on purpose.  `eslint-config-prettier` switches `curly` off, so the project's
  setting must come after it.
- Prettier does not break long strings or comments, so `max-len` stays as a
  safety net.  Confirm your `eslint-config-prettier` version allows it
  alongside `printWidth: 80`.

### No `scripts` in `package.json`

**[Required]** Do not define `scripts` in `package.json`.  Run every tool
through the project's `bin/exec` script.  It calls `nvm-yarn-kit`, which uses
the pinned Node and package manager and puts `node_modules/.bin` on the
path.  Create `bin/exec` in each repository from the kit's `example/` project.

Commands, run from the repository root:

- Lint: `bin/exec eslint .`
- Format: `bin/exec prettier --write .`
- Check formatting: `bin/exec prettier --check .`
- Type check: `bin/exec tsc --noEmit`
- Staged files: `bin/exec lint-staged`

Keep the `lint-staged` settings in `package.json`.  They are configuration,
not scripts.

```json
{
  "lint-staged": {
    "*.{ts,tsx,js}": ["eslint --fix", "prettier --write"],
    "*.{json,md,yml,css}": "prettier --write"
  }
}
```

## Enforcement

- **Pre-commit:** Husky with lint-staged runs the fixers on staged files.
  The hook file calls `bin/exec lint-staged`.  Without a
  `prepare` script, each developer activates the hooks once.  Husky's own
  `husky` command does this.  **[Open]** This has not been tested with the
  kit.
- **CI (the real gate):** every pull request runs the lint, format check and
  type check commands above, tests and `editorconfig-checker`.  A failure
  blocks merging.  Local hooks can be skipped, so CI must not be.
- **Shared setup:** the `dev-config` package holds the shared settings and
  `ci-templates` holds the shared workflows, so every repository behaves the
  same.
- AI-written code passes the same gates and the same human review as any
  other code.

## Environment setup (`nvm-yarn-kit`)

- Each repository pins its own versions: `.nvmrc` for Node and the
  `packageManager` field in `package.json` for Yarn.
- The kit reads those pins.  It never hard-codes versions.
- The kit loads nvm if it is installed and switches to the pinned Node,
  installing that version if needed.  If nvm is missing, it warns and uses
  the system Node.  It does not install nvm.
- The kit enables Corepack, then activates the pinned package manager.
- The kit's `bin/yarn` runs `yarn`.  Its `bin/exec` runs
  `yarn install --immutable`, then the given command.  Dependencies are
  installed only when `bin/exec` runs.
- The kit does not install Git hooks.  Set up Husky in each repository.
- Running the kit twice is safe.
- Each repository has its own `bin/exec` script that fetches a tagged
  release of the kit and calls the kit's `bin/exec`.  See `example/bin/exec`
  in the kit.  Pin the tag, and update it deliberately.
- Corepack's status in Node distributions has been changing.  Check the
  current Node docs.
- **[Open]** nvm does not run natively on Windows.  The kit does not cover
  Windows.  Decide whether Windows needs support (nvm-windows or WSL).
