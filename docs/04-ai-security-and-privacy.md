# AI, security and privacy

## AI behaviour

These rules apply to anything that calls a model.

- Validate model output against a schema before it reaches other systems or
  users.
- Do hard constraints in code.  Let the model rank, summarise or explain.
- Say so when the AI is unsure.  Do not sound confident on thin data.
- Put model calls behind an interface.  Keep model IDs and settings in
  config, never hard-coded.
- Before changing models, run a fixed evaluation set (realistic inputs with
  correct answers).  Score schema validity, missed items and false
  positives.
- If access to a model is pending in a region, build and test with a
  stand-in model, then re-run the evaluation set once access arrives.

## Security and privacy

- Never commit or paste credentials, API keys, PII or production data.
  Redact first.
- Use least-privilege access for every service and function.
- Keep secrets in a secrets manager, encrypted at rest.
- Treat client content as confidential to that client.  Do not carry it
  across clients or aggregate it without instruction.
- Keep model inference in-region where data residency matters.  Avoid
  routing client data through global or cross-region inference unless
  cleared.
- Prefer models that suit client policy.  Some clients may object to a
  model's origin even when data stays in-region.
- Security and legal review is required for anything touching access
  control, personal data or compliance.
- This document is not legal advice.
