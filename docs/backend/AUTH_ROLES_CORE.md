# Auth + Roles Core v1.4

## Added

- User model
- Register
- Login
- JWT
- CurrentUser decorator
- Roles decorator
- JwtAuthGuard
- RolesGuard
- Admin-only users list

## Test order

1. Register owner.
2. Login owner.
3. Copy token.
4. Call `/api/auth/me`.
5. Register admin.
6. Login admin.
7. Call `/api/users`.

## Next backend modules

- Company model
- Team roles inside company
- Protect properties/bookings/tasks by user/company
- Refresh tokens
- Password reset
