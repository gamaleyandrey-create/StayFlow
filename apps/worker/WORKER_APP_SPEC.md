# Worker App Specification

## 1. Цель

Worker App помогает исполнителям получать задачи, выполнять их и отправлять фотоотчеты.

Целевая аудитория:

- уборщики;
- мастера;
- сантехники;
- электрики;
- прачечные;
- фотографы;
- трансферные компании.

---

# 2. Основные экраны

## 2.1 Login

Поля:

- phone/email;
- password.

## 2.2 Registration

Поля:

- name;
- phone;
- email;
- city;
- service type;
- profile photo;
- documents;
- bank account.

## 2.3 Dashboard

Показывает:

- задачи сегодня;
- доступные задачи;
- доход за неделю;
- рейтинг;
- уведомления.

## 2.4 Available Tasks

Карточка задачи:

- тип;
- город;
- район;
- время;
- цена;
- срочность;
- расстояние.

Кнопки:

- Accept;
- Decline.

## 2.5 My Tasks

Разделы:

- accepted;
- today;
- in progress;
- completed.

## 2.6 Task Details

Показывает:

- объект;
- адрес;
- карта;
- время;
- описание;
- чек-лист;
- контакт менеджера;
- цена.

Кнопки:

- Accept;
- Start;
- Complete;
- Report Problem;
- Chat.

## 2.7 Start Work

После нажатия Start:

- статус → IN_PROGRESS;
- Owner получает уведомление;
- фиксируется время начала.

## 2.8 Complete Work

Worker должен:

- пройти чек-лист;
- загрузить фото;
- добавить комментарий;
- отметить проблемы, если есть.

После завершения:

- статус → COMPLETED;
- Owner получает уведомление;
- объект может стать READY.

## 2.9 Photo Report

Для уборки обязательные фото:

- kitchen;
- bathroom;
- bedroom;
- living room;
- general view.

Для ремонта:

- before;
- after;
- problem area.

## 2.10 Earnings

Показывает:

- today;
- week;
- month;
- pending;
- paid;
- history.

---

# 3. Worker Statuses

Worker может быть:

- pending verification;
- active;
- paused;
- blocked.

---

# 4. Task Status Flow

```text
NEW → ASSIGNED → ACCEPTED → IN_PROGRESS → COMPLETED
```

Альтернативные статусы:

```text
CANCELLED
PROBLEM
REJECTED
```

---

# 5. Worker App UX Rules

- worker должен понимать “куда ехать, когда, что делать, сколько заработает”;
- не показывать лишнюю информацию;
- все действия должны быть крупными кнопками;
- фотоотчет должен быть обязательным для cleaning.
