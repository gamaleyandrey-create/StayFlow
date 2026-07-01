# StayFlow API Modules

## Auth

- POST /auth/register
- POST /auth/login
- POST /auth/refresh
- POST /auth/logout
- POST /auth/forgot-password

## Users

- GET /users/me
- PATCH /users/me
- GET /users/team
- POST /users/team
- DELETE /users/team/:id

## Properties

- GET /properties
- POST /properties
- GET /properties/:id
- PATCH /properties/:id
- DELETE /properties/:id

## Bookings

- GET /bookings
- POST /bookings
- GET /bookings/:id
- PATCH /bookings/:id
- DELETE /bookings/:id

## Tasks

- GET /tasks
- POST /tasks
- GET /tasks/:id
- PATCH /tasks/:id
- PATCH /tasks/:id/status
- POST /tasks/:id/assign
- POST /tasks/:id/photos

## Worker

- GET /worker/tasks
- GET /worker/available-tasks
- POST /worker/tasks/:id/accept
- POST /worker/tasks/:id/start
- POST /worker/tasks/:id/complete
- POST /worker/tasks/:id/problem
- GET /worker/earnings

## Guest

- GET /guest/:guestLink
- POST /guest/:guestLink/message
- POST /guest/:guestLink/service-request
- POST /guest/:guestLink/problem

## Chat

- GET /chats
- GET /chats/:id/messages
- POST /chats/:id/messages

## Finance

- GET /finance/summary
- GET /finance/properties/:id
- GET /finance/export

## Admin

- GET /admin/users
- GET /admin/companies
- GET /admin/tasks
- GET /admin/reports
