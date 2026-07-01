# Backend Events

StayFlow should be event-driven internally.

## Event: booking.created

Triggered when booking is created.

Actions:

- create guest if needed;
- generate guest link;
- create calendar event;
- create cleaning task;
- notify owner/manager.

Payload:

```json
{
  "bookingId": "uuid",
  "propertyId": "uuid",
  "guestId": "uuid",
  "checkOutDate": "2026-08-05"
}
```

---

## Event: task.assigned

Triggered when Owner assigns Worker.

Actions:

- notify worker;
- update task status;
- create audit log.

---

## Event: task.accepted

Triggered when Worker accepts.

Actions:

- notify owner;
- update task status.

---

## Event: task.completed

Triggered when Worker completes task.

Actions:

- validate photo report;
- update task status;
- notify owner;
- update property status to READY if task type is CLEANING.

---

## Event: problem.reported

Triggered by Guest or Worker.

Actions:

- create repair/problem task;
- update property status to PROBLEM;
- notify owner/manager;
- mark task priority high if urgent.

---

## Event: message.created

Triggered when chat message is sent.

Actions:

- notify receiver;
- translate message later in AI version;
- store message.
