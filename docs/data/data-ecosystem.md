---
title: The Cryospheric Data Ecosystem
sidebar_position: 1
---

# The Cryospheric Data Ecosystem

## 1. Multi-Modal Polar Data Landscape

The Indian polar research program encompasses an exceptionally diverse array of data modalities collected across Antarctica, the Arctic, and the Southern Ocean:

```mermaid
graph TD
    A["Cryospheric Data Ecosystem"] --> B["1. Tabular Sensor Telemetry"]
    A --> C["2. Unstructured Scientific Manuscripts"]
    A --> D["3. High-Resolution Visual Assets"]
    A --> E["4. Geospatial & Geodetic Benchmarks"]
    
    B --> B1["Hourly AWS Weather Feeds<br/>Ocean CTD Profiles (Salinity/Temp)<br/>Ice Core Stratigraphy Records"]
    C --> C1["DSpace Technical Expedition Reports<br/>Peer-Reviewed Cryosphere Journals<br/>Voyage Operations Logbooks"]
    D --> D1["Synoptic Sea-Ice Facsimile Charts<br/>Satellite Orbital Ground Trajectories<br/>Station Construction Photographs"]
    E --> E1["Doppler Transit Satellite Passes<br/>Permanent Survey Monuments<br/>Glacial Flow Benchmark Coordinates"]
```

---

## 2. Key Data Formats & Metadata Standards

| Data Category | Primary Formats | Governing Metadata Standard | Primary Custodian |
| :--- | :--- | :--- | :--- |
| **Meteorological Sensors** | CSV, NetCDF-4, ASCII | WMO-01 / Climate and Forecast (CF-1.8) | National Polar Data Center (NPDC) |
| **Expedition Reports** | PDF, Scanned TIFF | Dublin Core (ISO 15836) / OAI-PMH | NCPOR Digital Repository (DSpace) |
| **Geodetic Coordinates** | DMS, Decimal Degrees | WGS-84 (EPSG:4326) | Survey of India / NCPOR Geodesy |
| **Visual Media** | JPEG, PNG, GeoTIFF | EXIF / IPTC Core | NCPOR Media & Outreach Cell |
