# Python

Apply this section to a project that selects Python.  The language-neutral
rules in [code style](../02-code-style.md) and
[tooling and enforcement](../03-tooling-and-enforcement.md) apply as well.

## Technology stack

- **[Proposed]** Python 3.12 or later, with the version pinned in
  `.python-version` and `requires-python` in `pyproject.toml`.
- **[Proposed]** uv for the Python version, virtual environment, dependencies
  and lockfile (`uv.lock`).
- **[Proposed]** Ruff for linting and formatting, pyright for type checking
  and pytest for tests.
- **[Proposed]** Type hints on every function signature.

## Formatting rules

- **[Required]** Every file is at most 80 characters wide.
- **[Proposed]** Indent with 2 spaces, the same as TypeScript.  This departs
  from PEP 8, which recommends 4.  Ruff's formatter supports it through
  `indent-width`.  Tools that assume 4 spaces need their setting changed.
- **[Proposed]** Single quotes for strings.  Docstrings use double quotes, as
  PEP 257 recommends.
- The TypeScript rules on trailing commas and braces do not apply.  Python
  has no braces, and Ruff's formatter adds a trailing comma when it splits a
  collection over several lines.  Let the formatter decide.

## Clean Code limits in Ruff

The starting limits in [code style](../02-code-style.md#clean-code-rules) map
to Ruff like this.  Check the rule names against the current Ruff docs.

- Complexity 10: `C901` through `max-complexity`.
- Parameters per function, 3: `PLR0913` through `max-args`.
- Magic values: `PLR2004`.
- Nesting depth and function length in lines have no stable Ruff rule.  Check
  them in review.  **[Open]**

## Tooling configuration

These configs have not been run.  Test them on a small sample project and
check the current uv, Ruff and pyright docs.

Example files live in [configs/python/](../../configs/python/):

- [pyproject.toml](../../configs/python/pyproject.toml)
- [.editorconfig](../../configs/python/.editorconfig)
- [bin/exec](../../configs/python/bin/exec)

### No task runners

**[Proposed]** Do not add a task runner such as tox, nox, poethepoet or a
Makefile to wrap the checks.  Run every tool through the project's `bin/exec`
script.  It runs `uv run --locked`, so the pinned Python and the locked
dependencies are used.  Copy `bin/exec` from the example into each
repository.

Commands, run from the repository root:

- Lint: `bin/exec ruff check .`
- Format: `bin/exec ruff format .`
- Check formatting: `bin/exec ruff format --check .`
- Type check: `bin/exec pyright`
- Test: `bin/exec pytest`

## Enforcement

- **Before committing:** run the lint, format and type check commands above
  and fix every failure.  No pre-commit tool is used.
- **CI (the real gate):** every pull request runs the lint, format check and
  type check commands above, tests and `editorconfig-checker`.  A failure
  blocks merging.

## Environment setup (uv)

- Each repository pins its own versions: `.python-version` for Python and
  `uv.lock` for dependencies.
- `uv run --locked` fails if `uv.lock` is out of date.  This matches
  `yarn install --immutable` in the TypeScript section.
- uv installs the pinned Python if it is missing.  It does not install uv.
  Install uv separately and set `required-version` under `[tool.uv]`.
- No shared kit repository is needed.  The `bin/exec` script is short.  If
  two repositories need more than it does, extract it then.
- **[Open]** Commit message checks.  commitlint needs Node.  Choose a
  Python-friendly option such as commitizen, or run commitlint in CI only.
