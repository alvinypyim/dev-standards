# Code style

These rules apply to every language.  Language-specific formatting, such as
quote style, braces and trailing commas, lives in the language sections listed
in the [overview](01-overview.md#languages).

## Formatting rules

- **[Required]** Every file is at most 80 characters wide.
- **[Required]** Put two spaces after each sentence, in code comments and
  in Markdown prose.
- **[Proposed]** Wrap Markdown prose at 80 characters by hand.
- **[Open]** How the two-space rule is enforced in Markdown.  Some
  formatters collapse the spaces, so Markdown files are excluded from them.

## Dates and times

- Store every time in UTC with its IANA time zone, for example
  Australia/Adelaide.

## Clean Code rules

Apply with judgement.  Where we deliberately deviate, say why in the code
review.

- **[Required]** Follow Clean Code principles across all projects.
- Functions are small and do one thing.
- Names say what a thing is or does, for example minutes until next event.
  Use the language's naming convention.
- No magic values.  Give numbers and strings a named constant, for example
  a high confidence threshold.
- Prefer guard clauses and early returns over deep nesting.
- No nested conditional expressions.
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
