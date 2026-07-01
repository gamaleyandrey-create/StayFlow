# Company-Scoped Security v1.6

## Goal

Prevent users from accessing data from other companies.

## Rules

- ADMIN can access all data.
- OWNER/MANAGER can access only data where `property.companyId = user.companyId`.
- Booking access is checked through its property.
- Task access is checked through its property.
- New properties are created with current user's companyId.

## Next

- Worker-specific task access.
- Guest link expiration.
- Company subscription limits.
- Audit logs.
