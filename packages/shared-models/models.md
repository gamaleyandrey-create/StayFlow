# Shared Models Draft

## Property

```ts
type PropertyStatus =
  | 'FREE'
  | 'OCCUPIED'
  | 'CLEANING_NEEDED'
  | 'READY'
  | 'PROBLEM';

interface Property {
  id: string;
  title: string;
  address: string;
  city?: string;
  bedrooms?: number;
  bathrooms?: number;
  maxGuests?: number;
  status: PropertyStatus;
}
```

## Booking

```ts
interface Booking {
  id: string;
  propertyId: string;
  guestName: string;
  guestEmail?: string;
  checkInDate: string;
  checkOutDate: string;
  guestLink: string;
}
```

## Task

```ts
type TaskStatus =
  | 'NEW'
  | 'ASSIGNED'
  | 'ACCEPTED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'PROBLEM';

interface Task {
  id: string;
  propertyId: string;
  bookingId?: string;
  type: string;
  title: string;
  status: TaskStatus;
}
```
