---
title: Database Initialization & Seeding
sidebar_position: 6
---

# Database Initialization & Seeding

## 1. Schema Creation

```bash
# Initialize SQLite database and seed default stations and expeditions
python -c "from database.connection import init_db; init_db()"
```
Creates tables for stations, expeditions, datasets, publications, and media records.
