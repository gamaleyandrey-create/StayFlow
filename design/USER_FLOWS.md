# StayFlow User Flows

## Flow 1 — Owner creates booking

1. Owner opens Bookings.
2. Taps Add Booking.
3. Selects property.
4. Adds guest details.
5. Adds check-in and check-out.
6. Saves booking.
7. System creates guest.
8. System creates guest link.
9. System creates cleaning task.
10. System adds events to calendar.
11. Owner sees confirmation.

Success message:

> Booking created. Cleaning task added automatically.

---

## Flow 2 — Worker completes cleaning

1. Worker receives notification.
2. Opens task.
3. Taps Accept.
4. On arrival taps Start.
5. Completes checklist.
6. Uploads required photos.
7. Adds comment.
8. Taps Complete.
9. System changes task status to COMPLETED.
10. Owner receives notification.
11. Property status changes to READY.

---

## Flow 3 — Guest reports problem

1. Guest opens Guest Link.
2. Taps Report Problem.
3. Selects problem type.
4. Adds photo and comment.
5. Sends request.
6. System creates task.
7. Owner receives alert.
8. Owner assigns Worker.
9. Worker resolves task.
10. Guest receives update.

---

## Flow 4 — Owner assigns Worker

1. Owner opens Task Details.
2. Taps Assign Worker.
3. Sees available workers.
4. Selects worker.
5. Worker receives notification.
6. Task status changes to ASSIGNED.
7. Worker accepts.
8. Task status changes to ACCEPTED.
