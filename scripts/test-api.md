# Test StayFlow API v0.4

## Register

POST http://localhost:3000/api/auth/register

```json
{
  "name": "Andrey",
  "email": "andrey@example.com",
  "password": "123456",
  "role": "OWNER"
}
```

## Create property

POST http://localhost:3000/api/properties

```json
{
  "title": "Apartment Marbella 01",
  "address": "Marbella Center",
  "city": "Marbella",
  "bedrooms": 2,
  "bathrooms": 1,
  "maxGuests": 4
}
```

## Create booking

POST http://localhost:3000/api/bookings

```json
{
  "propertyId": "PROPERTY_ID",
  "guestName": "John Smith",
  "guestEmail": "john@example.com",
  "checkInDate": "2026-08-01",
  "checkOutDate": "2026-08-05",
  "guestsCount": 2,
  "amount": 850,
  "source": "Direct"
}
```
