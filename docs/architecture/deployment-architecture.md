---
title: Deployment Architecture & Container Topology
sidebar_position: 11
---

# Deployment Architecture & Container Topology

## 1. Production Docker Topology

PolarNexus is designed for containerized deployment across on-premise institutional servers (NCPOR Goa data center) or sovereign cloud infrastructure (NIC MeghRaj):

```mermaid
graph TD
    subgraph Reverse Proxy & Gateway
        Nginx["Nginx Reverse Proxy<br/>(TLS 1.3 / SSL Termination)"]
    end

    subgraph Application Tier
        Streamlit["PolarNexus Streamlit Web App<br/>(Container: polarnexus-ui:latest)"]
        FastAPI["FastAPI Knowledge Backend<br/>(Container: polarnexus-api:latest)"]
    end

    subgraph Worker & Background Tier
        CrawlerWorker["DSpace Harvesting Worker<br/>(Container: polarnexus-crawler:latest)"]
    end

    subgraph Data & Storage Tier
        Postgres["PostgreSQL Metadata DB<br/>(Volume: pg_data)"]
        ChromaVolume["ChromaDB Vector Store<br/>(Volume: chroma_data)"]
        PDFVolume["Raw Bitstreams & Media<br/>(Volume: raw_assets)"]
    end

    Nginx -->|Port 443 / 80| Streamlit & FastAPI
    Streamlit <--> FastAPI
    CrawlerWorker --> PDFVolume & ChromaVolume & Postgres
    FastAPI <--> Postgres & ChromaVolume & PDFVolume
```

---

## 2. Resource Specifications

| Service Container | CPU Allocation | Memory (RAM) Allocation | Persistent Storage |
| :--- | :--- | :--- | :--- |
| **`polarnexus-ui`** | 2 vCPUs | 4 GB | 500 MB (Ephemeral) |
| **`polarnexus-api`** | 2 vCPUs | 4 GB | 500 MB (Ephemeral) |
| **`polarnexus-crawler`** | 1 vCPU | 2 GB | Shared `raw_assets` mount |
| **`chromadb`** | 2 vCPUs | 8 GB | 20 GB (SSD / NVMe) |
| **`postgresql`** | 2 vCPUs | 4 GB | 50 GB (RAID 10) |
