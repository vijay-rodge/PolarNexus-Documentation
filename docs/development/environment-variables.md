---
title: Environment Variables Configuration
sidebar_position: 3
---

# Environment Variables Configuration

## 1. `.env` Specification

Copy `.env.example` to `.env`:

```env
# Application Settings
APP_NAME=PolarNexus
ENVIRONMENT=development
LOG_LEVEL=INFO

# Storage Paths
DATA_DIR=data
RAW_PDF_DIR=data/raw/pdfs
CHUNKS_FILE=data/chunks/document_chunks.jsonl
METADATA_DIR=data/metadata

# DSpace Repository Configuration
DSPACE_BASE_URL=http://14.139.119.23:8080/dspace
DSPACE_REQUEST_DELAY=1.0
CRAWLER_MAX_RETRIES=3

# Vector Store
CHROMA_PERSIST_DIR=data/chroma_db
```
