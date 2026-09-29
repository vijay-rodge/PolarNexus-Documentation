---
title: Data Validation & Outlier Detection
sidebar_position: 9
---

# Data Validation & Outlier Detection

## 1. WMO Physical Boundary Guardrails

The `DataValidator` module applies physical boundary rules derived from World Meteorological Organization (WMO) Antarctic observational limits:

| Parameter | Minimum Valid Limit | Maximum Valid Limit | Typical Maitri Range | Unit |
| :--- | :--- | :--- | :--- | :--- |
| **Air Temperature** | `-90.0` | `+20.0` | `-35.0 to +7.0` | `°C` |
| **Wind Speed** | `0.0` | `100.0` | `0.0 to 45.0` | `m/s` |
| **Atmospheric Pressure** | `920.0` | `1040.0` | `960.0 to 1010.0` | `hPa` |
| **Relative Humidity** | `0.0` | `100.0` | `30.0 to 95.0` | `%` |

---

## 2. Statistical Outlier Rejection

The validator computes the rolling Interquartile Range (IQR) to detect artificial sensor spikes caused by riming or power outages:

```python
# Interquartile Range outlier detection
iqr = q3 - q1
lower_bound = q1 - 3.0 * iqr
upper_bound = q3 + 3.0 * iqr
```

Calculation parameters:
```text
IQR = Q3 - Q1
Valid Range = [Q1 - 3.0 * IQR, Q3 + 3.0 * IQR]
```

Readings outside this boundary are flagged as sensor anomalies and excluded from climate trend calculations.