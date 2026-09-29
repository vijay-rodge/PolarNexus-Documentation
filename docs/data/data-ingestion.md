---
title: Data Ingestion Pipeline
sidebar_position: 4
---

# Data Ingestion Pipeline

## 1. Ingestion Execution Flow

The ingestion pipeline executes multi-threaded, resilient harvesting across target collections:

```mermaid
sequenceDiagram
    participant Worker as Crawler Ingestion Worker
    participant State as SQLite State Tracker
    participant Server as NCPOR DSpace Server
    participant Storage as Local Raw Storage

    Worker->>State: Get next unvisited URL
    State-->>Worker: Return Canonical Handle URL
    Worker->>Server: HTTP GET with Rate Limit Delay 1s
    Server-->>Worker: Return HTML Item Page
    Worker->>Worker: Parse Dublin Core and Bitstream Link
    Worker->>Server: HTTP GET PDF Bitstream
    Server-->>Worker: Stream Binary Bytes
    Worker->>Worker: Validate PDF Magic Bytes and SHA-256
    Worker->>Storage: Save PDF and Extracted Text
    Worker->>State: Mark URL as Visited
```

---

## 2. Ingestion Command-Line Usage

The pipeline can be executed via the `crawler.cli` module:

```bash
# Ingest all records from DSpace starting point (Max 25 pages, Depth 4)
python -m crawler.cli --start-url http://14.139.119.23:8080/dspace/community-list --page-limit 25

# Execute live search & harvest for a specific scientific domain
python -m crawler.cli --query "oceanology"

# Reset crawler state database and re-index
python -m crawler.cli --reset-state
```
