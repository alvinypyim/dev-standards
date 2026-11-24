# Instructions for AI agents

These standards apply to every repository in the project.  Read the
[README](README.md) for the document map and rule tags.

Before you finish any task:

1. Read the language sections that apply to the project, listed in the
   [overview](docs/01-overview.md#languages).  Run the lint, format check and
   type check commands that section gives, and fix every failure.
2. Follow [code style](docs/02-code-style.md) and the language section
   exactly, including formatting, quotes, braces and naming.
3. Keep functions small.  Do not exceed the limits in
   [Clean Code rules](docs/02-code-style.md#clean-code-rules).
4. Run every tool through the project's `bin/exec`, as the language section
   describes.  Do not add scripts or task runners to wrap the checks.
5. Write commit messages as a single Conventional Commits line, with no body
   or footers, for example `fix(parser): handle empty input`.  Never add a
   `Co-authored-by` line or any other credit to an AI agent.  The person who
   commits takes full responsibility.  See
   [commits](docs/05-governance.md#commits).
6. Validate external input and model output against a schema.
7. Never hard-code region, model IDs, secrets or credentials.
8. Never log or store tokens or personal data beyond what the design
   allows.
9. Write Australian English in comments, docs and user-facing text
   (organisation, optimise, colour).  Avoid hype words and em-dashes.  Put two
   spaces after each sentence, including in code comments.
10. If a rule here conflicts with the task, say so and ask.  Do not quietly
    break the rule.
11. Treat your output as a first draft for qualified review, especially for
    production, access control, data or compliance.

When you change these standards, add an entry to
[CHANGELOG.md](CHANGELOG.md).
