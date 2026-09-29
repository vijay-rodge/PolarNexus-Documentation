---
title: Source Connectors & Integration Protocols
sidebar_position: 3
---

# Source Connectors & Integration Protocols

## 1. Python Source Connector Implementations

PolarNexus implements dedicated source connectors following a common interface:

```python
from abc import ABC, abstractmethod
from typing import Dict, Any, List

class BaseDataConnector(ABC):
    @abstractmethod
    def discover_items(self, query: str) -> List[Dict[str, Any]]:
        pass

    @abstractmethod
    def fetch_item_bitstream(self, item_id: str, dest_path: str) -> bool:
        pass
```

### 1.1 `DSpaceHttpConnector`
- Handles HTTP session management, cookie persistence, and rate-limiting.
- Supports querying both the `/simple-search` endpoint and the hierarchical `/community-list`.

### 1.2 `NPDCTabularConnector`
- Ingests structured CSV files from `data/raw/tabular/`.
- Parses column schemas and temporal resolutions (hourly, daily, monthly).
