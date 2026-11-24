# Java

Apply this section to a project that selects Java.  The language-neutral
rules in [code style](../02-code-style.md) and
[tooling and enforcement](../03-tooling-and-enforcement.md) apply as well.

## Technology stack

- **[Proposed]** Java 21 or a later LTS release, pinned with a Gradle
  toolchain.
- **[Proposed]** Gradle with the Kotlin DSL, run through the Gradle wrapper.
- **[Open]** Maven instead of Gradle.  Pick one per project and keep the
  wrapper (`mvnw`) if it is Maven.
- **[Proposed]** Spotless for formatting, Checkstyle for style and limits,
  and JUnit 5 for tests.

## Formatting rules

- **[Required]** Every file is at most 80 characters wide.
- **[Proposed]** Indent with 2 spaces.
- Single quotes do not apply.  Java uses double quotes for strings and single
  quotes for `char`.
- **[Open]** Braces.  `if (condition) doThis();` is valid Java, but Java
  convention and Google's style guide require braces.  The example Checkstyle
  config allows a single-line body.  Decide whether Java follows the
  universal braceless rule or requires braces.
- **[Open]** Formatter.  google-java-format has a fixed 100 column limit, so
  it cannot meet the 80 column rule.  The example uses Spotless with an
  Eclipse formatter profile set to 80 columns and 2 spaces.  The profile file
  does not exist yet.  Trailing commas are left to the formatter.

## Clean Code limits in Checkstyle

The starting limits in [code style](../02-code-style.md#clean-code-rules) map
to Checkstyle modules: `CyclomaticComplexity`, `NestedIfDepth`,
`NestedForDepth`, `ParameterNumber`, `MethodLength` and `MagicNumber`.  Check
the module names and properties against the current Checkstyle docs.

## Tooling configuration

These configs have not been run.  Test them on a small sample project and
check the current Gradle, Spotless and Checkstyle docs.

Example files live in [configs/java/](../../configs/java/):

- [build.gradle.kts](../../configs/java/build.gradle.kts)
- [checkstyle.xml](../../configs/java/checkstyle.xml)
- [.editorconfig](../../configs/java/.editorconfig)
- [bin/exec](../../configs/java/bin/exec)

### Run tools through `bin/exec`

**[Proposed]** Run every Gradle task through the project's `bin/exec` script.
It calls the Gradle wrapper, which pins the Gradle version.  The toolchain in
`build.gradle.kts` pins Java.  Commit the wrapper files.

Commands, run from the repository root:

- Format: `bin/exec spotlessApply`
- Check formatting: `bin/exec spotlessCheck`
- Lint: `bin/exec checkstyleMain checkstyleTest`
- Type check: `bin/exec compileJava compileTestJava`
- Test: `bin/exec test`

## Enforcement

- **Before committing:** run the commands above and fix every failure.  No
  pre-commit tool is used.
- **CI (the real gate):** every pull request runs the format check, lint,
  compile and tests, and `editorconfig-checker`.  A failure blocks merging.

## Environment setup

- Each repository pins Gradle in `gradle/wrapper/gradle-wrapper.properties`
  and Java in the toolchain.  Gradle downloads a missing JDK only if a
  toolchain resolver is configured.  **[Open]**
- No shared kit repository is needed.
- **[Open]** Commit message checks.  commitlint needs Node.  Choose a
  Java-friendly option or run commitlint in CI only.
