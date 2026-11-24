# Overview

## Purpose and scope

This is the single source of truth for how we write, check and ship code.  It
is written for people and for AI agents.  Linters and CI enforce what they
can.  These documents cover everything else.

Audience: engineers and AI agents.
Scope: every repository that follows these standards.

Every rule carries a tag:

- **[Required]** stated by the project owner.
- **[Proposed]** suggested during design and open to change.
- **[Open]** not yet decided.

## Languages

Language rules are optional features.  A project applies the sections for the
languages it uses, on top of the language-neutral documents.

- [TypeScript](languages/typescript.md): formatting,
  tooling, enforcement and environment setup.
- [Python](languages/python.md): formatting, tooling, enforcement and
  environment setup.
- [Java](languages/java.md): formatting, tooling, enforcement and environment
  setup.
- [.NET](languages/dotnet.md): formatting, tooling, enforcement and
  environment setup.
- [Rust](languages/rust.md): formatting, tooling, enforcement and environment
  setup.
