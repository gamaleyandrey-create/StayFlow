# Next Steps

## 1. GitHub

Загрузить этот пакет в корень репозитория.

## 2. GitHub Pages

Убедиться, что Pages смотрит на `/docs`.

## 3. Issues

Создать Milestones:

- MVP Backend
- Owner App
- Worker App
- Guest App
- Pilot Spain

## 4. Development later

Когда переходишь к локальной разработке:

```bash
git clone https://github.com/YOUR_USERNAME/StayFlow.git
cd StayFlow
```

Backend:

```bash
cd backend
npm install
cp .env.example .env
npm run prisma:migrate
npm run start:dev
```

Owner App:

```bash
cd owner
flutter pub get
flutter run
```
