---
title: Dataset Discovery & Schema Detection
sidebar_position: 2
---

# Dataset Discovery & Schema Detection

## 1. Automated Schema Identification

The `SchemaDetector` module automatically inspects tabular data files to detect:
- Timestamp columns across diverse formats (ISO 8601, epoch seconds, custom Julian dates).
- Physical parameter columns (air temperature, dew point, wind velocity, barometric pressure).
- Unit conventions (°C, K, knots, m/s, hPa, mmHg).
