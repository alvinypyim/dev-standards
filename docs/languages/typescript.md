# TypeScript

Apply this section to a project that selects TypeScript.
The language-neutral rules in [code style](../02-code-style.md) and
[tooling and enforcement](../03-tooling-and-enforcement.md) apply as well.

## Technology stack

- **[Required]** TypeScript for all code in projects that select it.
- **[Proposed]** Node.js managed by nvm, Yarn managed by Corepack.

## Formatting rules

- **[Required]** Use single quotes in all TypeScript files.
- **[Required]** No trailing comma after the last item of an array or object.
- **[Required]** No braces around a single-statement body.  Write
  `if (condition) doThis();`, not a block.
- **[Proposed]** Indent with 2 spaces.
- **[Open]** Semicolons.  Prettier adds them by default.  Set `"semi": false`
  if the project prefers none.

### Notes on braceless bodies

- A braceless body is a known source of bugs.  If someone adds a second line
  under the `if`, it runs unconditionally and TypeScript will not warn.
- Allow it only for a single statement.  A guard clause on one line is the
  best fit: `if (isEmpty) return;`.
- The `curly` rule (`multi-or-nest`) enforces it.  Braces are then required
  when a body spans several lines.
- With an 80-character limit, a long condition that wraps will need braces.
  Keep guard conditions short.

### Exceptions to the formatting rules

Keep this list short.  Define it once in `.prettierignore` (see
[configs](../../configs/typescript/)) and the EditorConfig
checker's ignore file.

- Markdown files (`*.md`), because Prettier collapses the two spaces after
  each sentence.
- JSON files must use double quotes, as the JSON specification requires.
- Lockfiles such as `yarn.lock`.
- Generated output, build folders, binaries and images.
- URLs that cannot be wrapped.
- Long JSON string values, for example descriptions in `package.json`.

## Clean Code limits in ESLint

The starting limits in [code style](../02-code-style.md#clean-code-rules) are
set in `eslint.config.js`: complexity, nesting depth, parameters per function
and function length.  Magic numbers and naming are checked there too.

## Tooling configuration

ESLint owns code quality.  Prettier owns formatting.  EditorConfig covers file
types the other two do not (shell scripts, Dockerfiles and similar).

These configs have not been run.  Test them on a small sample repository and
check the current typescript-eslint, Prettier and editorconfig-checker docs.

Example files live in
[configs/typescript/](../../configs/typescript/):

- [.prettierrc.json](../../configs/typescript/.prettierrc.json)
- [.prettierignore](../../configs/typescript/.prettierignore)
- [.editorconfig](../../configs/typescript/.editorconfig)
- [eslint.config.js](../../configs/typescript/eslint.config.js)

Notes:

- Set Prettier's `trailingComma` explicitly.  Prettier 3 defaults to adding
  trailing commas everywhere.
- In the ESLint config, the `prettier` entry comes before the project rules
  on purpose.  `eslint-config-prettier` switches `curly` off, so the project's
  setting must come after it.
- Prettier does not break long strings or comments, so `max-len` stays as a
  safety net.  Confirm your `eslint-config-prettier` version allows it
  alongside `printWidth: 80`.
- Prettier does format Markdown, so `.prettierignore` excludes `*.md`.  The
  two-space sentence rule is then checked outside Prettier.  **[Open]**

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

## Enforcement

- **Before committing:** run the lint, format and type check commands above
  and fix every failure.  No pre-commit tool is used.
- **CI (the real gate):** every pull request runs the lint, format check and
  type check commands above, tests and `editorconfig-checker`.  A failure
  blocks merging.

## Environment setup (`nvm-yarn-kit`)

The one shared repository we require for TypeScript projects is
`nvm-yarn-kit`.

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
- Running the kit twice is safe.
- Each repository has its own `bin/exec` script that fetches a tagged
  release of the kit and calls the kit's `bin/exec`.  See `example/bin/exec`
  in the kit.  Pin the tag, and update it deliberately.
- Corepack's status in Node distributions has been changing.  Check the
  current Node docs.
- **[Open]** nvm does not run natively on Windows.  The kit does not cover
  Windows.  Decide whether Windows needs support (nvm-windows or WSL).
