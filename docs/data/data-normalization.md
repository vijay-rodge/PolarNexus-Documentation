---
title: Data Normalization Standards
sidebar_position: 6
---

# Data Normalization Standards

## 1. Geodetic & Physical Normalization

PolarNexus enforces strict normalization across all physical parameters and coordinates:

### 1.1 Geodetic Coordinate Normalization
Legacy expedition reports specify coordinates in various DMS (Degrees, Minutes, Seconds) notations:
```text
70° 45' 57" S, 11° 38' 14" E
```
The normalizer maps these to signed decimal degrees conforming to WGS-84 standard:
```text
Latitude: -70.765833, Longitude: +11.637222
```

### 1.2 Meteorological Parameter Normalization
- **Air Temperature**: Normalized to Celsius (°C) and Kelvin (K).
- **Wind Speed**: Normalized from knots or km/h to SI standard meters per second (`m/s`).
- **Barometric Pressure**: Converted to hectopascals (`hPa`) or millibars (`mb`).
- **Relative Humidity**: Normalized to percentage (`%`) ranging strictly between 0.0% and 100.0%.