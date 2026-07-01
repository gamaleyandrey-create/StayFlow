# StayFlow Monorepo Guide

## Why monorepo

A monorepo keeps all StayFlow products in one repository:

- Owner App
- Worker App
- Guest App
- Admin Panel
- Backend
- Shared models
- UI components
- API client

This reduces duplication and keeps product development synchronized.

## Folder rules

### apps/

Contains user-facing applications.

### backend/

Contains NestJS API.

### packages/shared-models/

Shared DTOs, enums and types.

### packages/ui-components/

Reusable design system components.

### packages/api-client/

Shared API wrapper used by frontend apps.

### docs/

Product, architecture and API documentation.

### scripts/

Automation scripts.
