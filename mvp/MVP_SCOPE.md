# StayFlow MVP Scope v1.0

## 1. Главная цель MVP

Проверить, готовы ли управляющие компании в Испании использовать StayFlow каждый день для управления:

- объектами;
- бронированиями;
- уборками;
- исполнителями;
- гостевыми инструкциями;
- проблемами гостей.

---

# 2. Что входит в MVP

## Owner App

Обязательно:

- Login
- Dashboard
- Properties
- Property Details
- Add Property
- Bookings
- Add Booking
- Tasks
- Task Details
- Assign Worker
- Chat MVP
- Settings

## Worker App

Обязательно:

- Login
- Dashboard
- My Tasks
- Task Details
- Accept Task
- Start Task
- Complete Task
- Upload Photo Report
- Report Problem
- Earnings basic

## Guest App

Обязательно:

- Open Guest Link
- Welcome
- Check-in Info
- Wi-Fi
- Door Code
- Apartment Guide
- Chat
- Report Problem
- Request Service basic

## Backend

Обязательно:

- Auth
- Roles
- Properties CRUD
- Bookings CRUD
- Auto cleaning task
- Tasks CRUD
- Worker task status flow
- Guest link
- Chat MVP
- Notifications MVP
- Photo upload MVP

## Admin Panel

Минимум:

- список пользователей;
- список компаний;
- список объектов;
- список задач;
- просмотр проблем.

---

# 3. Что НЕ входит в MVP

Не делать в первой версии:

- AI Concierge
- AI Manager
- Airbnb API integration
- Booking.com API integration
- Stripe payments
- Worker marketplace bidding
- Dynamic pricing
- Advanced accounting
- Electronic signatures
- Complex analytics
- Native push production setup

---

# 4. Главная автоматизация MVP

Когда Owner создает бронирование:

1. Создается booking.
2. Создается guest.
3. Генерируется guest link.
4. Создается cleaning task на дату checkout.
5. Cleaning task появляется в Tasks.
6. Owner может назначить Worker.
7. Worker выполняет уборку и загружает фото.
8. Property получает статус READY.

---

# 5. MVP Success Criteria

MVP считается успешным, если:

- 3 управляющие компании добавили объекты;
- 30+ объектов в системе;
- 100+ задач уборки созданы;
- 70%+ уборок завершены через Worker App;
- 50+ guest links открыты гостями;
- минимум 2 компании готовы платить после пилота.
