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
through `nvm-yarn-kit`, which uses the pinned Node and package manager and
puts `node_modules/.bin` on the path.  The kit is cloned as `.nvm-yarn-kit`
in each repository.

Commands, run from the repository root:

- Lint: `.nvm-yarn-kit/bin/exec eslint .`
- Format: `.nvm-yarn-kit/bin/exec prettier --write .`
- Check formatting: `.nvm-yarn-kit/bin/exec prettier --check .`
- Type check: `.nvm-yarn-kit/bin/exec tsc --noEmit`
- Staged files: `.nvm-yarn-kit/bin/exec lint-staged`

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
  The hook file calls `.nvm-yarn-kit/bin/exec lint-staged`.  Without a
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
- `bin/yarn` runs `yarn`.  `bin/exec` runs `yarn install --immutable`, then
  the given command.  Dependencies are installed only when `bin/exec` runs.
- The kit does not install Git hooks.  Set up Husky in each repository.
- Running the kit twice is safe.
- Each repository clones a tagged release of the kit as `.nvm-yarn-kit` and
  calls its scripts.  See the `example/` project in the kit.  Pin the tag,
  and update it deliberately.
- Corepack's status in Node distributions has been changing.  Check the
  current Node docs.
- **[Open]** nvm does not run natively on Windows.  The kit does not cover
  Windows.  Decide whether Windows needs support (nvm-windows or WSL).
