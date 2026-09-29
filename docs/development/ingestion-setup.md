---
title: Ingestion Engine Configuration
sidebar_position: 7
---

# Ingestion Engine Configuration

## 1. Running Sample Ingestion

```bash
# Harvest sample oceanology manuscripts (Items 281 and 754)
python -m crawler.cli --query oceanology
```
Downloads PDFs, extracts text, chunks into `document_chunks.jsonl`, and indexes into ChromaDB.
