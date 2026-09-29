---
title: Dataset Querying & Temporal Slicing
sidebar_position: 3
---

# Dataset Querying & Temporal Slicing

## 1. Vectorized Temporal Filtering

Executes high-performance temporal filtering:
```python
# Slicing hourly sensor observations for polar winter (June - August)
winter_slice = df[(df['timestamp'].dt.month >= 6) & (df['timestamp'].dt.month <= 8)]
mean_winter_temp = winter_slice['temperature_c'].mean()
```
Calculations execute in sub-millisecond timeframes directly in memory.
