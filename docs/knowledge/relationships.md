---
title: Entity Relationships & Discovery Graph
sidebar_position: 10
---

# Entity Relationships & Discovery Graph

## 1. Graph Traversal for Discovery

By modeling entities relationally, users can execute multi-hop queries that were previously impossible across disconnected portals:

```mermaid
graph LR
    Q["'What research papers used Maitri AWS data in 2012?'"]
    Q --> Station["Station: Maitri"]
    Station --> Dataset["Dataset: maitri_aws_2012"]
    Dataset --> Publication["Publication: Item 754 / Technical Pub"]
    Publication --> Researcher["Researcher: M. Sarangapani"]
    Publication --> Media["Media: Fig 1 Sea-Ice Chart"]
```

This interconnected graph structure is what transforms PolarNexus from a simple search engine into an intelligent polar knowledge discovery engine.
