<div align="center">

# amalgam-e2e-1786769057658

> Amalgam E2E test repo (auto-deleted)

</div>

---

<div align="center">

[![Express.js](https://img.shields.io/badge/Express.js-powered-000000?logo=express&logoColor=white)](https://img.shields.io/badge/Express.js-powered-000000?logo=express&logoColor=white)
[![MongoDB](https://img.shields.io/badge/MongoDB-powered-47A248?logo=mongodb&logoColor=white)](https://img.shields.io/badge/MongoDB-powered-47A248?logo=mongodb&logoColor=white)
[![Axios](https://img.shields.io/badge/Axios-enabled-6e6e6e?logoColor=white)](https://img.shields.io/badge/Axios-enabled-6e6e6e?logoColor=white)
[![Docker](https://img.shields.io/badge/Docker-powered-2496ED?logo=docker&logoColor=white)](https://img.shields.io/badge/Docker-powered-2496ED?logo=docker&logoColor=white)
[![Docker Compose](https://img.shields.io/badge/Docker_Compose-powered-2496ED?logo=docker&logoColor=white)](https://img.shields.io/badge/Docker_Compose-powered-2496ED?logo=docker&logoColor=white)
[![Terraform](https://img.shields.io/badge/Terraform-enabled-6e6e6e?logoColor=white)](https://img.shields.io/badge/Terraform-enabled-6e6e6e?logoColor=white)
[![Node.js](https://img.shields.io/badge/Node.js->=20-339933?logo=nodedotjs&logoColor=white)](https://img.shields.io/badge/Node.js->=20-339933?logo=nodedotjs&logoColor=white)
[![Built with](https://img.shields.io/badge/Built_with-Amalgam-7c3aed?logoColor=white)](https://img.shields.io/badge/Built_with-Amalgam-7c3aed?logoColor=white)

</div>

## Overview

Amalgam E2E test repo (auto-deleted)

- **Repository:** [athPATIL247/amalgam-e2e-1786769057658](https://github.com/athPATIL247/amalgam-e2e-1786769057658)
- **Branch:** `main`
- **Last commit:** `ec103a3` - fix: release 0.2.1 — dependency and infra updates

## Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Express.js |
| Database | MongoDB (Mongoose) |
| Tooling | Axios |
| Tooling | Docker |
| Tooling | Docker Compose |
| Tooling | Terraform |

## Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** v9+ or **pnpm**
- **MongoDB** (Atlas free tier or local)
- **Redis** (local or Upstash)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/athPATIL247/amalgam-e2e-1786769057658.git
cd amalgam-e2e-1786769057658

# 2. Install dependencies
# API Server
cd apps/api && npm install

# Web Dashboard
cd ../web && npm install

# 3. Configure environment variables
cp apps/api/.env.example apps/api/.env
# Edit apps/api/.env with your credentials

# 4. Start development servers
# In separate terminals:
cd apps/api && npm run dev
cd apps/web && npm run dev
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the values below.

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `env` | Required | Environment variable for Terraform | `dev` |

---

<div align="center">

*This README was autonomously generated and maintained by*
*[**Amalgam Docryx**](https://github.com) - the autonomous documentation engine.*
*Last updated: 2026-08-15 . Commit: `ec103a3`*

</div>
