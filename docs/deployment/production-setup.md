---
title: Production Infrastructure Setup
sidebar_position: 3
---

# Production Infrastructure Setup

## 1. Infrastructure Architecture

- Reverse Proxy: Nginx terminating SSL/TLS 1.3.
- Application Server: Gunicorn with Uvicorn workers for FastAPI; Streamlit daemon for the frontend.
- Relational Database: PostgreSQL 16 with daily automated WAL archiving.
