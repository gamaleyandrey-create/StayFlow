# StayFlow Database Schema v0.6

## Core entities

- User
- Company
- Property
- Booking
- Guest
- WorkerProfile
- Task
- TaskPhoto
- Chat
- Message
- Notification
- Payment
- Subscription
- AuditLog

---

# 1. users

```sql
id UUID PRIMARY KEY
name TEXT NOT NULL
email TEXT UNIQUE NOT NULL
phone TEXT
role TEXT NOT NULL
password_hash TEXT
created_at TIMESTAMP
updated_at TIMESTAMP
```

Roles:

- OWNER
- MANAGER
- WORKER
- GUEST
- ADMIN

---

# 2. companies

```sql
id UUID PRIMARY KEY
name TEXT NOT NULL
owner_id UUID REFERENCES users(id)
subscription_plan TEXT
created_at TIMESTAMP
```

---

# 3. properties

```sql
id UUID PRIMARY KEY
company_id UUID REFERENCES companies(id)
title TEXT NOT NULL
type TEXT
address TEXT NOT NULL
city TEXT
country TEXT DEFAULT 'Spain'
bedrooms INTEGER
bathrooms INTEGER
max_guests INTEGER
wifi_name TEXT
wifi_password TEXT
door_code TEXT
instructions TEXT
status TEXT
created_at TIMESTAMP
updated_at TIMESTAMP
```

Statuses:

- FREE
- OCCUPIED
- CLEANING_NEEDED
- CLEANING_IN_PROGRESS
- READY
- REPAIR
- PROBLEM

---

# 4. guests

```sql
id UUID PRIMARY KEY
name TEXT NOT NULL
email TEXT
phone TEXT
country TEXT
created_at TIMESTAMP
```

---

# 5. bookings

```sql
id UUID PRIMARY KEY
property_id UUID REFERENCES properties(id)
guest_id UUID REFERENCES guests(id)
check_in_date DATE
check_out_date DATE
check_in_time TIME
check_out_time TIME
guests_count INTEGER
amount NUMERIC
source TEXT
status TEXT
guest_link TEXT UNIQUE
created_at TIMESTAMP
```

Sources:

- AIRBNB
- BOOKING
- DIRECT
- OTHER

---

# 6. worker_profiles

```sql
id UUID PRIMARY KEY
user_id UUID REFERENCES users(id)
city TEXT
service_type TEXT
rating NUMERIC
is_verified BOOLEAN
bank_account TEXT
created_at TIMESTAMP
```

---

# 7. tasks

```sql
id UUID PRIMARY KEY
property_id UUID REFERENCES properties(id)
booking_id UUID REFERENCES bookings(id)
assigned_worker_id UUID REFERENCES users(id)
type TEXT
title TEXT
description TEXT
date DATE
time TIME
price NUMERIC
status TEXT
priority TEXT
created_at TIMESTAMP
updated_at TIMESTAMP
```

Task types:

- CLEANING
- REPAIR
- LAUNDRY
- INSPECTION
- PHOTO_REPORT
- TRANSFER
- OTHER

---

# 8. task_photos

```sql
id UUID PRIMARY KEY
task_id UUID REFERENCES tasks(id)
photo_url TEXT NOT NULL
type TEXT
created_at TIMESTAMP
```

Photo types:

- BEFORE
- AFTER
- KITCHEN
- BATHROOM
- BEDROOM
- LIVING_ROOM
- PROBLEM

---

# 9. chats

```sql
id UUID PRIMARY KEY
property_id UUID REFERENCES properties(id)
booking_id UUID REFERENCES bookings(id)
type TEXT
created_at TIMESTAMP
```

---

# 10. messages

```sql
id UUID PRIMARY KEY
chat_id UUID REFERENCES chats(id)
sender_id UUID REFERENCES users(id)
text TEXT
image_url TEXT
message_type TEXT
created_at TIMESTAMP
```

---

# 11. notifications

```sql
id UUID PRIMARY KEY
user_id UUID REFERENCES users(id)
title TEXT
body TEXT
type TEXT
is_read BOOLEAN
created_at TIMESTAMP
```

---

# 12. payments

```sql
id UUID PRIMARY KEY
user_id UUID REFERENCES users(id)
task_id UUID REFERENCES tasks(id)
amount NUMERIC
status TEXT
created_at TIMESTAMP
```

---

# 13. audit_logs

```sql
id UUID PRIMARY KEY
user_id UUID REFERENCES users(id)
entity_type TEXT
entity_id UUID
action TEXT
old_value JSONB
new_value JSONB
created_at TIMESTAMP
```

---

# Main relationships

Company → many Properties  
Property → many Bookings  
Booking → one Guest  
Booking → many Tasks  
Task → optional Worker  
Task → many Photos  
Booking → Chat  
Chat → many Messages  
User → many Notifications  
