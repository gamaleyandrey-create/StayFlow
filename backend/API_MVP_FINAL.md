# StayFlow API MVP Final

## Auth

### POST /api/auth/register

Create user.

### POST /api/auth/login

Login user.

### GET /api/auth/me

Return current user.

---

# Properties

### GET /api/properties

List properties for company.

### POST /api/properties

Create property.

### GET /api/properties/:id

Get property details.

### PATCH /api/properties/:id

Update property.

### DELETE /api/properties/:id

Delete property.

---

# Bookings

### GET /api/bookings

List bookings.

### POST /api/bookings

Create booking and auto-create cleaning task.

### GET /api/bookings/:id

Get booking.

### PATCH /api/bookings/:id

Update booking.

### DELETE /api/bookings/:id

Cancel/delete booking.

---

# Tasks

### GET /api/tasks

List company tasks.

### POST /api/tasks

Create manual task.

### GET /api/tasks/:id

Get task details.

### PATCH /api/tasks/:id

Update task.

### PATCH /api/tasks/:id/status

Update status.

### POST /api/tasks/:id/assign

Assign worker.

### POST /api/tasks/:id/photos

Upload photos.

---

# Worker

### GET /api/worker/tasks

Assigned tasks.

### POST /api/worker/tasks/:id/accept

Accept task.

### POST /api/worker/tasks/:id/start

Start task.

### POST /api/worker/tasks/:id/complete

Complete task.

### POST /api/worker/tasks/:id/problem

Report problem.

---

# Guest

### GET /api/guest/:guestLink

Open guest link.

### POST /api/guest/:guestLink/message

Send message.

### POST /api/guest/:guestLink/problem

Report problem.

### POST /api/guest/:guestLink/service-request

Request service.

---

# Chat

### GET /api/chats

List chats.

### GET /api/chats/:id/messages

List messages.

### POST /api/chats/:id/messages

Send message.

---

# Notifications

### GET /api/notifications

List notifications.

### PATCH /api/notifications/:id/read

Mark as read.
