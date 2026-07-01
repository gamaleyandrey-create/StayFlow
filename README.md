# StayFlow

StayFlow is a property operations platform for short-term rental managers.

## Monorepo Structure

```text
apps/
  owner-app/
  worker-app/
  guest-app/
  admin-panel/

backend/

packages/
  shared-models/
  ui-components/
  api-client/

docs/
scripts/
```

## Main MVP Flow

1. Owner creates property.
2. Owner creates booking.
3. System creates cleaning task automatically.
4. Worker completes task with photo report.
5. Guest opens guest link.
