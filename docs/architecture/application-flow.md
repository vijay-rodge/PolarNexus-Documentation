---
title: Application Lifecycle & Request Flow
sidebar_position: 4
---

# Application Lifecycle & Request Flow

## 1. End-to-End User Interaction Flow

This sequence diagram illustrates the complete chronological path of a user prompt through the PolarNexus system:

```mermaid
sequenceDiagram
    autonumber
    actor User as Research Scientist / Student
    participant UI as Streamlit Web App
    participant Router as LangGraph Router
    participant Sandbox as Pandas Data Sandbox
    participant Chroma as ChromaDB Vector Store
    participant DB as Relational SQLite DB
    participant Synthesizer as Multi-Audience Synthesizer

    User->>UI: Submits Query: "What was Maitri average temperature in 2012?"
    UI->>Router: execute_polar_query(query, state)
    Note over Router: Evaluates prompt regex & intent semantics
    Router->>Router: Intent classified as 'numerical'
    
    Router->>Sandbox: calculate_temperature_statistics("Maitri", 2012)
    Note over Sandbox: Audits AST, loads maitri_aws_2012.csv, validates ranges
    Sandbox->>Sandbox: Vectorized computation (Mean, Min, Max, StdDev)
    Sandbox-->>Router: Returns validated metrics object
    
    Router->>DB: Query station metadata (Maitri coordinates, status)
    DB-->>Router: Returns WGS-84 location (70°45'S, 11°44'E)
    
    Router->>Synthesizer: Assemble evidence & format response
    Synthesizer-->>UI: Formatted Markdown + Timeseries Chart + Citations
    UI-->>User: Displays Verified Answer & Interactive Plotly Chart
```

---

## 2. State Progression within LangGraph

Throughout execution, state is preserved within the strongly typed `PolarState` dictionary:

```python
class PolarState(TypedDict):
    query: str                       # Original user input string
    intent: Optional[str]            # 'numerical', 'document_search', 'media', etc.
    extracted_entities: Dict[str, Any] # {'station': 'Maitri', 'year': 2012}
    retrieved_chunks: List[Dict[str, Any]] # Semantic vector search results
    numerical_results: Optional[Dict[str, Any]] # Computed Pandas statistical metrics
    response: Optional[str]          # Final synthesized Markdown output
    citations: List[Dict[str, Any]]  # Exact source provenance records
    execution_time_ms: float         # Wall-clock routing & compute latency
```

1. **State Initialization**: When `execute_polar_query()` is called, `PolarState` is initialized with the raw query and execution timestamp.
2. **Entity & Intent Node**: Enriches state with `intent` and extracted polar parameters.
3. **Branching Node**: Conditional edges evaluate `state['intent']` and activate either the deterministic tool node or vector retrieval node.
4. **Assembly Node**: Merges computed outputs, formats provenance records into the citation tree, and computes total elapsed latency.
