# v1.8 Notifications Core

## Events

- booking.created
- task.assigned
- task.accepted
- task.started
- task.completed
- problem.reported
- message.created
- guest.service.requested

## Notification channels

MVP:

- in-app notifications
- email placeholder

Later:

- push notifications
- WhatsApp
- SMS

## API

### GET /api/notifications

List notifications.

### PATCH /api/notifications/:id/read

Mark notification as read.

### POST /api/notifications/test

Send test notification.

## Notification object

```json
{
  "id": "uuid",
  "userId": "uuid",
  "title": "Task completed",
  "body": "Cleaning task was completed",
  "type": "TASK_COMPLETED",
  "isRead": false
}
```
