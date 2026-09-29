---
title: Data Processing & Resampling
sidebar_position: 4
---

# Data Processing & Resampling

## 1. Temporal Aggregation Routines

Raw Automatic Weather Station feeds often experience transmission jitter. PolarNexus regularizes data:
- Hourly resampling: `df.resample('1h', on='timestamp').mean()`
- Daily min/max diurnal summaries: `df.resample('1D', on='timestamp').agg(\{'temp': ['min', 'max', 'mean']\})`
- Outlier handling during polar blizzards and whiteouts.
