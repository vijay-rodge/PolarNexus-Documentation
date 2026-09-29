---
title: Streamlit Application Architecture
sidebar_position: 1
---

# Streamlit Application Architecture

## 1. Modular Multi-Page UI Framework

The PolarNexus web application is constructed on Streamlit, utilizing a modular multi-page architecture:

```mermaid
graph TD
    App["app.py (Homepage Dashboard)"] --> Nav["PolarNexus Left Sidebar (Vector SVG Emblem & Telemetry)"]
    Nav --> P1["01_assistant.py (Intelligent AI Assistant)"]
    Nav --> P2["02_stations.py (Polar Research Stations)"]
    Nav --> P3["03_expeditions.py (Expedition Catalog)"]
    Nav --> P4["04_datasets.py (NPDC Data Catalog)"]
    Nav --> P5["05_analytics.py (Deterministic Data Studio)"]
    Nav --> P6["06_publications.py (DSpace Live Harvester)"]
    Nav --> P7["07_media.py (High-Res Media Gallery)"]
    Nav --> P8["08_outreach.py (Educational Youth Hub)"]
    Nav --> P9["09_admin.py (Model Governance & Ingestion)"]
```

---

## 2. Branding & Styling Architecture
- **Enterprise Dark Theme**: Obsidian background (`#060B14`) with Arctic Cyan accents (`#38BDF8`).
- **Zero-Emoji Sidebar Component**: Custom SVG vector emblem featuring polar latitude circles and an 8-point compass star.
- **Dynamic DOM Repositioning**: Ensures the brand header is permanently fixed at the top of the sidebar above the navigation menu.
