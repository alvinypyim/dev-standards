# Security, privacy and authentication

## Security, privacy and legal

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

## Authentication

These rules apply where a project signs users in.

- Use the authorisation code flow with PKCE.
- Verify every ID token on the server (signature, audience, issuer, expiry).
- Keep sessions in `HttpOnly`, `Secure`, `SameSite` cookies.  Never use
  `localStorage` for tokens.
- Key records by the provider's stable `sub` claim, not by email address.
- Keep sign-in and access to provider APIs separate.  Request API scopes
  later, only when needed.
- Encrypt stored refresh tokens.  Let users disconnect and delete their data.
- Keep the client secret in a secrets manager and use exact redirect URIs per
  environment.
