---
title: Unified Search & AI Query API
sidebar_position: 3
---

# Unified Search & AI Query API

## 1. Endpoint: `POST /api/v1/query`

Submits natural language queries to the LangGraph routing engine:

```json
// Request
{
  "query": "What was the average temperature at Maitri in 2012?",
  "audience": "researcher"
}

// Response
{
  "intent": "numerical",
  "entities": {"station": "Maitri", "year": 2012},
  "answer": "The annual mean temperature recorded at Maitri Station in 2012 was -10.50 °C (Min: -34.80 °C, Max: +6.80 °C).",
  "citations": [
    {
      "source_name": "Maitri AWS Hourly Observations 2012",
      "dataset_id": "npdc_maitri_aws_2012",
      "provenance_hash": "e3b0c44..."
    }
  ],
  "execution_time_ms": 620.4
}
```
