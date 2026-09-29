---
title: Image Management & Extraction
sidebar_position: 2
---

# Image Management & Extraction

## 1. Automated Bitstream Extraction

The `PDFTextExtractor` pipeline parses XObject image streams embedded in PDF manuscripts:
- Filters out non-scientific artifacts (logos, line bullets) using dimension thresholds (`&gt; 300	imes300` px).
- Associates extracted bitmaps with surrounding textual figure captions (*"Fig 1: Sea-ice facsimile chart"*).
- Stores optimized PNG assets under `data/media/extracted_figures/`.
