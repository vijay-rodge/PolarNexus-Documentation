---
title: API Authentication & Rate Limiting
sidebar_position: 2
---

# API Authentication & Rate Limiting

## 1. Authentication Protocols

- **Public Endpoints**: Station listings, expedition directories, and educational explainers require no authentication.
- **Administrative & Ingestion Endpoints**: Require Bearer token authentication (`Authorization: Bearer <JWT_TOKEN>`).
- **Rate Limits**: 60 requests per minute per IP for public endpoints; 600 requests per minute for authenticated institutional clients.
