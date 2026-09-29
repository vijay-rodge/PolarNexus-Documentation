---
title: AI Security & Prompt Injection Defense
sidebar_position: 7
---

# AI Security & Prompt Injection Defense

## 1. Zero-Trust Generative Guardrails

- **Prompt Injection Scrubbing**: Strips system prompt override patterns (*e.g., "Ignore all previous instructions"*).
- **Out-of-Domain Containment**: Rejects non-polar inquiries immediately before triggering downstream models.
- **Deterministic Routing**: Mathematical queries are never passed to LLMs, completely immune to prompt injection tampering.
