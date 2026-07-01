# v1.7 Storage + Media Core

## Цель

Добавить загрузку и хранение файлов:

- фото уборки;
- фото ремонта;
- фото проблемы;
- документы объекта;
- PDF-инструкции;
- договоры;
- счета.

## MVP storage strategy

На MVP:

```text
backend/uploads/
```

Позже можно заменить на:

- AWS S3
- Cloudflare R2
- Supabase Storage
- Google Cloud Storage

## API

### POST /api/media/upload

Загрузка файла.

### GET /api/media/:id

Получить файл.

### DELETE /api/media/:id

Удалить файл.

### POST /api/tasks/:id/photos

Привязать фото к задаче.

### POST /api/properties/:id/documents

Привязать документ к объекту.

## Security

- файл доступен только компании, которой принадлежит объект/задача;
- Guest видит только файлы своего бронирования;
- Worker видит только файлы назначенной задачи.

## Limits

- images: jpg, png, webp;
- docs: pdf;
- max image size: 10 MB;
- max pdf size: 20 MB.
