# Backend Core v1.3

## Run

```bash
docker compose up -d
cd backend
npm install
cp .env.example .env
npm run prisma:migrate
npm run start:dev
```

## Test

Use `scripts/test-backend.http` in VS Code REST Client.

## Main behavior

Creating a booking automatically creates a cleaning task.

Completing a cleaning task changes the property status to READY.
