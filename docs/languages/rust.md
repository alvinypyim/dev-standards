# Rust

Apply this section to a project that selects Rust.  The language-neutral
rules in [code style](../02-code-style.md) and
[tooling and enforcement](../03-tooling-and-enforcement.md) apply as well.

## Technology stack

- **[Proposed]** Rust installed through rustup, with the exact toolchain
  pinned in `rust-toolchain.toml`.
- **[Proposed]** Cargo for builds and dependencies.  Commit `Cargo.lock`.
- **[Proposed]** rustfmt for formatting and Clippy for linting.
- **[Proposed]** Cargo's built-in test runner.

## Formatting rules

- **[Required]** Every file is at most 80 characters wide.  Set
  `max_width = 80`.  The rustfmt default is 100.
- **[Proposed]** Indent with 2 spaces, set with `tab_spaces = 2`.  The Rust
  default is 4.
- Single quotes do not apply.  Rust uses double quotes for strings and single
  quotes for `char` and lifetimes.
- The braceless rule does not apply.  Rust requires braces on `if` and loop
  bodies.
- Trailing commas are left to rustfmt.  The option that changes them may need
  a nightly toolchain.  **[Open]**
- rustfmt does not read `.editorconfig`.  Keep both files in step.

## Clean Code limits in Clippy

The starting limits in [code style](../02-code-style.md#clean-code-rules) map
to Clippy settings in `clippy.toml`.  Several lints are in the pedantic or
nursery groups and need enabling.  Check the names and groups against the
current Clippy docs.

- Complexity 10: `cognitive_complexity`, a cognitive measure rather than
  cyclomatic.
- Parameters per function, 3: `too_many_arguments`.
- Function length, 20 lines: `too_many_lines`.
- Nesting depth, 3: `excessive_nesting`.
- Magic numbers have no matching Clippy lint.  Check them in review.
  **[Open]**

## Tooling configuration

These configs have not been run.  Test them on a small sample crate and check
the current rustfmt and Clippy docs.

Example files live in [configs/rust/](../../configs/rust/):

- [rust-toolchain.toml](../../configs/rust/rust-toolchain.toml)
- [rustfmt.toml](../../configs/rust/rustfmt.toml)
- [clippy.toml](../../configs/rust/clippy.toml)
- [.editorconfig](../../configs/rust/.editorconfig)
- [bin/exec](../../configs/rust/bin/exec)

Enable the extra lints in `Cargo.toml`:

```toml
[lints.clippy]
cognitive_complexity = "warn"
too_many_arguments = "warn"
too_many_lines = "warn"
excessive_nesting = "warn"
```

### Run tools through `bin/exec`

**[Proposed]** Run every `cargo` command through the project's `bin/exec`
script.  It calls `cargo`, and rustup installs the toolchain pinned in
`rust-toolchain.toml` on first use.

Commands, run from the repository root:

- Format: `bin/exec fmt`
- Check formatting: `bin/exec fmt --check`
- Lint: `bin/exec clippy --all-targets --locked -- -D warnings`
- Type check: `bin/exec check --all-targets --locked`
- Test: `bin/exec test --locked`

## Enforcement

- **Before committing:** run the commands above and fix every failure.  No
  pre-commit tool is used.
- **CI (the real gate):** every pull request runs the format check, Clippy
  with warnings as errors, the type check, tests and `editorconfig-checker`.
  A failure blocks merging.

## Environment setup

- Each repository pins the toolchain in `rust-toolchain.toml` and
  dependencies in `Cargo.lock`.  `--locked` fails if the lockfile is stale.
- rustup is not installed by `bin/exec`.  Install it separately.
- No shared kit repository is needed.
- **[Open]** Dependency auditing, for example `cargo audit` or `cargo deny`.
- **[Open]** Commit message checks.  commitlint needs Node.  Choose a
  Rust-friendly option or run commitlint in CI only.
