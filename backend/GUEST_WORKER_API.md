# Guest + Worker API

## Guest

### GET /guest/:guestLink

Returns guest booking data:

- property;
- booking;
- guide;
- check-in info;
- services.

### POST /guest/:guestLink/message

Creates chat message.

### POST /guest/:guestLink/problem

Creates problem task.

### POST /guest/:guestLink/service-request

Creates service request.

---

## Worker

### GET /worker/tasks

Returns assigned tasks.

### GET /worker/available-tasks

Returns marketplace tasks.

### POST /worker/tasks/:id/accept

Worker accepts task.

### POST /worker/tasks/:id/start

Task status → IN_PROGRESS.

### POST /worker/tasks/:id/complete

Task status → COMPLETED.

### POST /worker/tasks/:id/problem

Creates problem report.

### POST /worker/tasks/:id/photos

Uploads task photos.

### GET /worker/earnings

Returns earnings summary.
