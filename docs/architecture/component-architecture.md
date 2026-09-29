---
title: Component Architecture & Code Modules
sidebar_position: 3
---

# Component Architecture & Code Modules

## 1. Codebase Directory Organization

The PolarNexus codebase is structured strictly according to modular software engineering principles:

```text
prototype_2/
├── agents/                      # LangGraph multi-agent workflow & intent routing
│   ├── graph.py                 # Graph definition, state machine, and router node
│   ├── state.py                 # TypedDict PolarState declaration
│   └── tools/                   # Tool registry and controlled deterministic methods
│       └── controlled_tools.py  # Sandboxed analytical tools & database wrappers
│
├── crawler/                     # NCPOR DSpace crawling & bitstream pipeline
│   ├── cli.py                   # Command-line interface for crawling & queries
│   ├── config.py                # CrawlerConfig dataclass & path definitions
│   ├── downloader.py            # PDF Downloader with %PDF- and SHA-256 validation
│   ├── dspace_parser.py         # Dublin Core HTML table parser & URL canonicalizer
│   ├── dspace_search_harvester.py # End-to-end Simple-Search harvester
│   ├── extractor.py             # PDF text extraction & semantic chunker
│   └── state_manager.py         # SQLite-based crawler state tracking
│
├── scientific_engine/           # Zero-hallucination deterministic computing
│   ├── analyzer.py              # ScientificDataAnalyzer (Pandas AST sandbox)
│   ├── document_analyzer.py     # Geodetic coordinate extraction & deep synthesis
│   ├── schema_detector.py       # Column header & temporal unit detector
│   └── validator.py             # Data hygiene & WMO physical limit auditor
│
├── rag/                         # Vector database & chunking pipeline
│   ├── chunker.py               # Section-aware document chunker
│   ├── cleaner.py               # Header/footer/page number sanitizer
│   └── vectorstore/             # ChromaDB persistent vector repository
│       └── chroma_store.py      # PolarVectorStore indexing & similarity queries
│
├── ml/                          # Scikit-Learn domain classification & clustering
│   ├── classification/          # TF-IDF + LogisticRegression / NaiveBayes
│   ├── clustering/              # K-Means cryospheric topic discovery
│   └── governance/              # Model registry persistence & audit logging
│
├── database/                    # SQLAlchemy relational models & connection
│   ├── connection.py            # SQLite / PostgreSQL engine & session factory
│   └── models.py                # ORM definitions (Station, Expedition, Publication)
│
└── streamlit_app/               # Multi-page user interface
    ├── app.py                   # Main homepage dashboard
    ├── components/              # Reusable UI widgets (cards, sidebar, charts)
    └── pages/                   # Modular sub-applications (01 to 09)
```

---

## 2. Core Python Classes & Responsibilities

| Module | Core Class / Method | Architectural Responsibility |
| :--- | :--- | :--- |
| `crawler.dspace_search_harvester` | `DSpaceSearchHarvester` | Queries DSpace simple-search, parses handles, downloads bitstreams, triggers extraction and vector upsert in an end-to-end automated loop. |
| `crawler.downloader` | `PDFDownloader` | Executes HTTP streaming downloads with exponential backoff, verifies `%PDF-` binary magic bytes, and computes SHA-256 checksums. |
| `crawler.dspace_parser` | `DSpaceParser` | Extracts Dublin Core metadata (Title, Authors, Date, Collection, Series, Bitstream URL) from item records. |
| `scientific_engine.analyzer` | `ScientificDataAnalyzer` | Safely evaluates mathematical queries against tabular sensor archives using a sandboxed AST interpreter without arbitrary code execution. |
| `scientific_engine.document_analyzer`| `DocumentAnalyzer` | Normalizes legacy DMS coordinates to WGS-84 decimal pairs and generates multi-paragraph non-hallucinated scientific reports. |
| `rag.vectorstore.chroma_store` | `PolarVectorStore` | Initializes ChromaDB `PersistentClient`, generates dense embeddings, and performs HNSW vector similarity searches. |
| `agents.graph` | `execute_polar_query()` | Compiles and executes the LangGraph state machine, coordinating intent classification, tool invocation, and evidence assembly. |
| `ml.classification.domain_classifier`| `ScientificDomainClassifier` | Trains and executes TF-IDF vectorizers paired with Logistic Regression to classify polar literature into scientific domains. |
