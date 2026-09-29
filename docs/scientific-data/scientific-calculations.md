---
title: Derived Physical Calculations
sidebar_position: 6
---

# Derived Physical Calculations

## 1. Cryospheric & Meteorological Equations

The PolarNexus scientific engine computes standardized cryospheric indices from raw Automatic Weather Station (AWS) time series:

### 1.1 Wind Chill Temperature Index (WCTI)

For ambient temperatures at or below 10 degrees Celsius and wind speeds at or above 4.8 km/h:

```python
def calculate_wcti(temp_celsius: float, wind_kmh: float) -> float:
    """Computes the standard Joint Action Group for Temperature Indices (JAG/TI) Wind Chill."""
    if temp_celsius > 10.0 or wind_kmh < 4.8:
        return temp_celsius
    return (
        13.12
        + 0.6215 * temp_celsius
        - 11.37 * (wind_kmh ** 0.16)
        + 0.3965 * temp_celsius * (wind_kmh ** 0.16)
    )
```

Formula specification:
```text
WCTI = 13.12 + 0.6215 * T - 11.37 * (V ^ 0.16) + 0.3965 * T * (V ^ 0.16)
```

where:
- `T` is the ambient air temperature in degrees Celsius
- `V` is the 10-meter surface wind speed in kilometers per hour

### 1.2 Vapor Pressure & Saturation over Ice

Using the standard Goff-Gratch formulation for sub-zero polar atmospheric conditions:

```python
def saturation_vapor_pressure_ice(temp_kelvin: float) -> float:
    """Computes saturation vapor pressure over ice in hPa using Goff-Gratch equation."""
    import math
    t0 = 273.16  # Ice-point temperature in Kelvin
    ratio = t0 / temp_kelvin
    log_p = (
        -9.09718 * (ratio - 1.0)
        - 3.56654 * math.log10(ratio)
        + 0.876793 * (1.0 - 1.0 / ratio)
        + math.log10(6.1071)
    )
    return 10 ** log_p
```