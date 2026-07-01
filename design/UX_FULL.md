# StayFlow UX Full Specification

## 1. Общие UX-принципы

- Любое действие — максимум 3 клика.
- Самое важное всегда сверху.
- Срочные проблемы выделяются красным.
- Завершенные задачи уходят вниз.
- Worker не видит лишнего.
- Guest видит только информацию по своему бронированию.
- Owner видит всю операционную картину.

---

# 2. Owner App

## 2.1 Login

Поля:

- Email
- Password

Кнопки:

- Login
- Forgot password
- Create account

После входа:

- Owner → Dashboard
- Manager → Dashboard с ограниченными правами

## 2.2 Dashboard

Карточки:

- Properties
- Check-ins today
- Check-outs today
- Cleaning tasks
- Repairs
- Revenue
- Problems
- New messages

Основные действия:

- New Booking
- New Property
- New Task

## 2.3 Properties

Список объектов.

Фильтры:

- All
- Ready
- Occupied
- Cleaning needed
- Repair
- Problem

Карточка объекта:

- photo
- title
- city
- status
- next check-in
- next check-out

## 2.4 Property Details

Вкладки:

- Overview
- Calendar
- Bookings
- Tasks
- Documents
- Finance
- Chat

Кнопки:

- Create booking
- Create task
- Edit property
- Open guest guide

## 2.5 Add Property

Поля:

- title
- type
- address
- city
- bedrooms
- bathrooms
- max guests
- Wi-Fi name
- Wi-Fi password
- door code
- instructions
- photos

## 2.6 Bookings

Список:

- guest name
- property
- check-in
- check-out
- amount
- source
- status

Кнопки:

- Create booking
- Open guest link
- Chat
- Edit

## 2.7 Add Booking

Поля:

- property
- guest name
- guest phone
- guest email
- country
- check-in date
- check-in time
- check-out date
- check-out time
- guests count
- amount
- source

После сохранения:

- создается booking;
- создается guest link;
- создается cleaning task на дату выезда;
- обновляется календарь;
- Owner получает уведомление.

## 2.8 Tasks

Фильтры:

- All
- Today
- Cleaning
- Repair
- Problem
- Completed

Статусы:

- NEW
- ASSIGNED
- ACCEPTED
- IN_PROGRESS
- COMPLETED
- CANCELLED
- PROBLEM

## 2.9 Task Details

Данные:

- property
- address
- booking
- worker
- date/time
- description
- photos
- checklist
- price
- status

Кнопки:

- Assign worker
- Change status
- Chat
- Cancel
- Confirm completed

## 2.10 Chat

Типы чатов:

- Owner ↔ Guest
- Owner ↔ Worker
- Guest ↔ Owner
- Platform support

Сообщения:

- text
- image
- document
- system event

## 2.11 Finance

MVP:

- income
- expenses
- cleaning costs
- repair costs
- profit
- filter by property
- filter by month

---

# 3. Worker App

## 3.1 Login / Registration

Поля:

- name
- phone
- email
- password
- city
- service type
- photo
- documents

Типы услуг:

- cleaning
- plumbing
- electrical
- repair
- laundry
- photography
- transfer
- pool maintenance

## 3.2 Worker Dashboard

Карточки:

- tasks today
- available tasks
- completed this week
- monthly income
- rating

## 3.3 Available Tasks

Карточка задачи:

- type
- property
- distance
- time
- price
- priority

Кнопки:

- Accept
- Decline

## 3.4 My Tasks

Разделы:

- accepted
- today
- in progress
- completed

## 3.5 Task Details

Показывает:

- address
- map
- time
- checklist
- description
- manager contact
- guest notes, если разрешено

Кнопки:

- Start
- Report problem
- Complete
- Chat

## 3.6 Photo Report

Обязательные фото для уборки:

- kitchen
- bathroom
- bedroom
- living room
- general view

Поля:

- comment
- problem detected
- additional work needed

---

# 4. Guest App

## 4.1 Access

В MVP Guest App открывается через уникальную ссылку:

`/guest/:guestLink`

Позже — мобильное приложение.

## 4.2 Welcome

Показывает:

- guest name
- property title
- stay dates
- main actions

## 4.3 Check-in Info

Поля:

- address
- map
- check-in time
- door code
- key location
- Wi-Fi
- parking
- house rules

## 4.4 Apartment Guide

Разделы:

- air conditioner
- heating
- washing machine
- TV
- trash
- internet
- emergency contacts

## 4.5 Chat

Guest пишет:

- question
- problem
- service request
- photo

## 4.6 Services

Услуги:

- extra cleaning
- extra towels
- late checkout
- transfer
- car rental
- excursions
- maintenance help

## 4.7 Report Problem

Быстрые кнопки:

- no hot water
- air conditioner not working
- door problem
- internet problem
- other

После отправки:

- создается task;
- Owner получает alert;
- при необходимости назначается Worker.
