---
title: Scientific Data Engine Overview
sidebar_position: 1
---

# Scientific Data Engine Overview

## 1. The Zero-Hallucination Mandate

In environmental and cryospheric science, computational veracity is paramount. PolarNexus enforces a strict architectural boundary: **language models are never permitted to guess mathematical calculations**.

All numerical queries (*"What was the mean temperature at Maitri in 2012?"*) are routed to the **Scientific Data Engine** (`scientific_engine/`), where operations are executed deterministically by Pandas and NumPy over validated sensor datasets.
