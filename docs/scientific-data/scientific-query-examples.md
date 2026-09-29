---
title: Scientific Query Examples & Benchmarks
sidebar_position: 9
---

# Scientific Query Examples & Benchmarks

## 1. Verified Query Benchmarks

| Natural Language Query | Internal Routing | Computed Result | Execution Time |
| :--- | :--- | :--- | :--- |
| *"What was the average temperature at Maitri in 2012?"* | Sandboxed Pandas AST | **-10.50 °C** (Min: -34.80 °C, Max: +6.80 °C) | **0.62 s** |
| *"Calculate wind speed extremes at Maitri in 2012"* | Sandboxed Pandas AST | **Max: 38.6 m/s (75.0 kt)** during August blizzard | **0.58 s** |
| *"Show temperature distribution for summer months"* | Pandas GroupBy + Plotly | Boxplot rendered for Dec, Jan, Feb | **0.71 s** |
