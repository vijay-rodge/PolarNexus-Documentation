---
title: REST API Architecture & Standards
sidebar_position: 1
---

# REST API Architecture & Standards

## 1. API Design Philosophy

PolarNexus exposes standard HTTP/REST endpoints powered by FastAPI, returning structured JSON payloads conforming to OpenAPI 3.1 specifications:
- Base URL: `https://polarnexus.ncpor.res.in/api/v1`
- Content Negotiation: `application/json`
- Error Format: RFC 7807 Problem Details
