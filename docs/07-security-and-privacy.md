# Security and privacy

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
