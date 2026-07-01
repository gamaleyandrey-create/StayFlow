# Guest App Specification

## 1. Цель

Guest App должен заменить длинные WhatsApp-сообщения и PDF-инструкции одной понятной гостевой страницей.

В MVP гость открывает приложение по ссылке:

```text
/guest/:guestLink
```

Регистрация не нужна.

---

# 2. Основные экраны

## 2.1 Welcome

Показывает:

- имя гостя;
- название объекта;
- даты проживания;
- фото объекта;
- кнопка “Start”.

## 2.2 Check-in Info

Показывает:

- адрес;
- карта;
- время заезда;
- код двери;
- где взять ключ;
- парковка;
- контакт поддержки.

## 2.3 Wi-Fi

Показывает:

- Wi-Fi name;
- Wi-Fi password;
- кнопка copy password.

## 2.4 Apartment Guide

Разделы:

- air conditioner;
- heating;
- washing machine;
- TV;
- trash;
- kitchen;
- balcony;
- pool;
- building rules.

## 2.5 Services

Услуги:

- extra cleaning;
- extra towels;
- late checkout;
- airport transfer;
- car rental;
- excursions;
- maintenance help.

## 2.6 Report Problem

Категории:

- door problem;
- no hot water;
- air conditioner;
- internet;
- electricity;
- noise;
- other.

Поля:

- comment;
- photo;
- urgency.

После отправки создается task для Owner.

## 2.7 Chat

Гость может отправить:

- текст;
- фото;
- вопрос;
- проблему.

Во второй версии — AI Concierge.

---

# 3. Guest App UX Rules

- максимум простоты;
- без сложной навигации;
- крупные кнопки;
- минимум текста;
- все важное видно сразу;
- инструкции должны быть понятны человеку, который устал после перелета.

---

# 4. Guest App Bottom Navigation

MVP:

1. Home
2. Guide
3. Chat
4. Services

---

# 5. Guest Link Security

Guest link должен быть:

- уникальным;
- случайным;
- ограниченным конкретным бронированием;
- активным только до checkout + 24 часа.

Пример:

```text
stayflow.app/guest/gst_8f92ks02
```
