# Code style

## Formatting rules

- **[Required]** Every file is at most 80 characters wide.
- **[Required]** Use single quotes in all files.
- **[Required]** No trailing comma after the last item of an array or object.
- **[Required]** No braces around a single-statement body.  Write
  `if (condition) doThis();`, not a block.
- **[Required]** Put two spaces after each sentence, in code comments and
  in Markdown prose.
- **[Proposed]** Indent with 2 spaces.
- **[Open]** Semicolons.  Prettier adds them by default.  Set `"semi": false`
  if the project prefers none.
- **[Proposed]** Wrap Markdown prose at 80 characters by hand, because
  Prettier does not format Markdown.

## Dates and times

- Store every time in UTC with its IANA time zone, for example
  Australia/Adelaide.

## Exceptions to the formatting rules

Keep this list short.  Define it once in `.prettierignore` and the
EditorConfig checker's ignore file.

- Markdown files (`*.md`), because Prettier collapses the two spaces after
  each sentence.
- JSON files must use double quotes, as the JSON specification requires.
- Lockfiles such as `yarn.lock`.
- Generated output, build folders, binaries and images.
- URLs that cannot be wrapped.
- Long JSON string values, for example descriptions in `package.json`.

## Notes on braceless bodies

- A braceless body is a known source of bugs.  If someone adds a second line
  under the `if`, it runs unconditionally and TypeScript will not warn.
- Allow it only for a single statement.  A guard clause on one line is the
  best fit: `if (isEmpty) return;`.
- The `curly` rule (`multi-or-nest`) enforces it.  Braces are then required
  when a body spans several lines.
- With an 80-character limit, a long condition that wraps will need braces.
  Keep guard conditions short.

## Clean Code rules

Apply with judgement.  Where we deliberately deviate, say why in the code
review.

- **[Required]** Follow Clean Code principles across all projects.
- Functions are small and do one thing.
- Names say what a thing is or does, for example `minutesUntilNextEvent`.
- No magic values.  Give numbers and strings a named constant, for example
  `HIGH_CONFIDENCE_THRESHOLD`.
- Prefer guard clauses and early returns over deep nesting.
- No nested ternaries.
- Comments explain why, not what.  Delete dead code.
- Handle errors explicitly.  Never swallow an error silently.
- Separate concerns.  Storage, queues and third-party APIs sit behind their
  own interfaces so each can be swapped.
- Keep pure logic apart from I/O so it can be tested without calling
  external services.
- Write tests for new behaviour.  Business rules that must always hold need
  unit tests.

Starting limits **[Proposed]**, to tune once real code exists:

- Cyclomatic complexity: 10.
- Nesting depth: 3.
- Parameters per function: 3.
- Function length: 20 lines, excluding blanks and comments.

Do not split a function purely to satisfy a limit.
