---
title: Authorization & Permission Scopes
sidebar_position: 3
---

# Authorization & Permission Scopes

## 1. JWT Scopes Architecture

Issues cryptographically signed JSON Web Tokens (JWT) using HMAC-SHA256 containing granular OAuth2 scopes:
- `query:execute`
- `datasets:read`
- `crawler:trigger`
- `models:manage`
