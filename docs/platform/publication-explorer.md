---
title: Publication Explorer & Live DSpace Harvester
sidebar_position: 9
---

# Publication Explorer & Live DSpace Harvester

## 1. Live DSpace Harvester UI

Located at `pages/06_publications.py`, this flagship module allows users to query the live NCPOR DSpace repository:
- **Tab 1: Live Simple-Search Harvester**: Enter any keyword (*"oceanology"*), and watch PolarNexus scrape DSpace handles, download PDFs, verify SHA-256 hashes, extract chunks, index into ChromaDB, and synthesize multi-paragraph deep reports in real time.
- **Tab 2: Harvested Manuscripts & Expeditions**: Browse previously indexed local manuscripts.
- **Tab 3: Institutional Publications**: Search peer-reviewed journal papers.
- **Tab 4: Real-Time PDF / OCR Analyzer**: Upload custom PDFs for on-the-fly coordinate extraction and executive summary generation.
- **Tab 5: ML Domain Classifier**: Classify paper abstracts using scikit-learn TF-IDF models.
