---
title: High-Level Architecture
sidebar_position: 2
---

# High-Level Architecture

## 1. Multi-Tier System Topology

PolarNexus is architected as a modular multi-tier distributed platform, segregating presentation, orchestration, computation, and storage layers:

```mermaid
flowchart TD
    subgraph T1["TIER 1: Presentation & Client Interface"]
        UI1["Streamlit Web Application"]
        UI2["Interactive Plotly Visualizers"]
        UI3["Leaflet Geospatial Maps"]
        UI4["Citations Interactive Drawer"]
    end

    subgraph T2["TIER 2: Gateway & Orchestrator"]
        GW1["FastAPI REST API"]
        GW2["LangGraph Routing Engine"]
        GW3["Intent Classifier & Entity Extractor"]
    end

    subgraph T3["TIER 3: Computation Engines"]
        ENG1["Deterministic Pandas AST Sandbox"]
        ENG2["ChromaDB Vector Retrieval"]
        ENG3["Geodetic Coordinate Geocoder"]
        ENG4["Pedagogical Outreach Synthesizer"]
        ENG5["Scikit-Learn ML Domain Classifier"]
    end

    subgraph T4["TIER 4: Storage & Persistence"]
        DB1["Relational DB (SQLAlchemy)"]
        DB2["Vector Embeddings (ChromaDB)"]
        DB3["Raw Tabular Datasets (AWS CSV)"]
        DB4["Extracted PDF Bitstreams & Figures"]
        DB5["Model Governance Registry"]
    end

    subgraph T5["TIER 5: External Repositories"]
        EXT1["NCPOR DSpace Repository"]
        EXT2["NPDC Weather Data Vaults"]
        EXT3["Survey of India Historical Geodesy"]
    end

    UI1 --- GW1
    UI1 --- GW2
    GW2 --> GW3
    GW3 --> ENG1
    GW3 --> ENG2
    GW3 --> ENG3
    GW3 --> ENG4
    GW3 --> ENG5

    ENG1 --- DB3
    ENG2 --- DB2
    ENG3 --- DB1
    ENG4 --- DB1
    ENG5 --- DB5

    DB1 --- EXT1
    DB2 --- EXT1
    DB3 --- EXT2
    DB4 --- EXT1
```

---

## 2. Interaction Between Tiers

### Client-to-Gateway Communication
- Clients interact via the Streamlit frontend or direct REST API requests.
- Requests pass to the Gateway where query strings are parsed, sanitized, and injected into the LangGraph state machine.

### Orchestrator-to-Engine Delegation
- The orchestrator delegates execution based on the classified intent:
  - If the query requires factual calculations from tabular data, it calls `ControlledPolarTools.calculate_temperature_statistics()`, completely bypassing LLM text generation.
  - If the query requires synthesis of expedition reports, it queries `PolarVectorStore.similarity_search_with_score()`.
  - If the query requires location data, it triggers the geodetic extraction regex pipeline.

### Engine-to-Storage Ingestion
- Ingestion workers populate Tier 4 storage asynchronously:
  - Tabular AWS records are stored under `data/raw/tabular/`.
  - PDF bitstreams are saved under `data/raw/pdfs/`.
  - Semantic chunks are appended to `data/chunks/document_chunks.jsonl`.
  - Dublin Core metadata is persisted in `data/metadata/documents.json` and relational tables.
