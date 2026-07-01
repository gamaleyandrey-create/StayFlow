# Run Backend

```bash
docker compose up -d
cd backend
npm install
cp .env.example .env
npm run prisma:migrate
npm run start:dev
```

API:

```text
http://localhost:3000/api
```
