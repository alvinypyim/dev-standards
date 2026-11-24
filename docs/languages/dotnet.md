# .NET

Apply this section to a project that selects .NET, with C# as the language.
The language-neutral rules in [code style](../02-code-style.md) and
[tooling and enforcement](../03-tooling-and-enforcement.md) apply as well.

## Technology stack

- **[Proposed]** C# on the current LTS .NET SDK, pinned in `global.json`.
- **[Proposed]** Nullable reference types on, and warnings treated as errors.
- **[Proposed]** `dotnet format` for formatting and the built-in .NET
  analysers for code style, driven by `.editorconfig`.
- **[Proposed]** xUnit for tests.  **[Open]** NUnit or MSTest instead.

## Formatting rules

- **[Required]** Every file is at most 80 characters wide.
- **[Proposed]** Indent with 2 spaces.  The .NET default is 4.
- Single quotes do not apply.  C# uses double quotes for strings and single
  quotes for `char`.
- **[Proposed]** Braces only when a body spans several lines, set with
  `csharp_prefer_braces = when_multiline`.  This matches the TypeScript
  rule.
- `dotnet format` does not enforce line width.  Check it with
  `editorconfig-checker`.  **[Open]**
- Trailing commas are left to the formatter and style rules.

## Clean Code limits

The starting limits in [code style](../02-code-style.md#clean-code-rules) map
to analyser rules.  Check each against the current docs.

- Complexity 10: `CA1502`, with the limit set in `CodeMetricsConfig.txt`.
- Parameters per function, nesting depth and function length have no
  built-in rule that matches.  SonarAnalyzer for C# has configurable rules
  for them.  **[Open]**
- Magic numbers have no built-in rule.  **[Open]**

## Tooling configuration

These configs have not been run.  Test them on a small sample solution and
check the current .NET SDK and analyser docs.

Example files live in [configs/dotnet/](../../configs/dotnet/):

- [global.json](../../configs/dotnet/global.json)
- [.editorconfig](../../configs/dotnet/.editorconfig)
- [Directory.Build.props](../../configs/dotnet/Directory.Build.props)
- [CodeMetricsConfig.txt](../../configs/dotnet/CodeMetricsConfig.txt)
- [bin/exec](../../configs/dotnet/bin/exec)

### Run tools through `bin/exec`

**[Proposed]** Run every `dotnet` command through the project's `bin/exec`
script.  It calls `dotnet`, which reads `global.json` and fails if the pinned
SDK is missing.  Pin the SDK version and update it deliberately.

Commands, run from the repository root:

- Format: `bin/exec format`
- Check formatting and style: `bin/exec format --verify-no-changes`
- Lint and type check: `bin/exec build --no-incremental`
- Test: `bin/exec test`

## Enforcement

- **Before committing:** run the commands above and fix every failure.  No
  pre-commit tool is used.
- **CI (the real gate):** every pull request runs the format check, build
  with warnings as errors, tests and `editorconfig-checker`.  A failure
  blocks merging.

## Environment setup

- Each repository pins the SDK in `global.json`.  NuGet lock files
  (`packages.lock.json`) pin dependencies.  Use `--locked-mode` in CI.
- The `dotnet` CLI does not install a missing SDK.  Install it separately.
- No shared kit repository is needed.
- **[Open]** Commit message checks.  commitlint needs Node.  Choose a
  .NET-friendly option or run commitlint in CI only.
