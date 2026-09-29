---
title: Data Lifecycle & Retention Policies
sidebar_position: 10
---

# Data Lifecycle & Retention Policies

## 1. End-to-End Lifecycle Stages

```mermaid
flowchart LR
    A["Discovered:<br/>Crawler finds handle"] --> B["Ingested:<br/>PDF & SHA-256 verified"]
    B --> C["Processed:<br/>Text & coordinates extracted"]
    C --> D["Indexed:<br/>Chunks embedded in ChromaDB"]
    D --> E["Active Serving:<br/>Live research queries"]
    E --> F["Archived:<br/>Cold storage snapshot"]
```

---

## 2. Cold Archival & Backup Strategies
- **Raw PDFs**: Retained permanently in `data/raw/pdfs/` with append-only access controls.
- **Extracted Text Chunks**: Versioned alongside model embeddings in `data/chunks/`.
- **Database Snapshots**: SQLite/PostgreSQL backups generated daily and archived offsite.
