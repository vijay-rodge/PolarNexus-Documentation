---
title: Debugging & Troubleshooting
sidebar_position: 10
---

# Debugging & Troubleshooting

## 1. Common Issues & Solutions

- **DSpace Connection Timeout**: Ensure `14.139.119.23:8080` is reachable. If network is high-latency, increase `DSPACE_TIMEOUT=30` in `.env`.
- **Windows Console Unicode Errors**: Set UTF-8 encoding: `$env:PYTHONIOENCODING="utf-8"`.
