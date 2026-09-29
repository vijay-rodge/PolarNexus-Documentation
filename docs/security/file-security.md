---
title: File Security & Bitstream Sanitization
sidebar_position: 5
---

# File Security & Bitstream Sanitization

## 1. Binary Magic Byte Verification

To guard against malicious payload delivery or corrupt downloads:
- Enforces strict `%PDF-` file magic signature validation.
- File uploads in the Admin analyzer are inspected before passing to PDF parsing engines.
