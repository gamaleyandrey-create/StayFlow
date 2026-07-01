# StayFlow v1.6 Company-Scoped Security

Добавляет принцип multi-tenant security:

- пользователь видит только данные своей компании;
- свойства привязаны к companyId;
- бронирования доступны через property.companyId;
- задачи доступны через property.companyId;
- ADMIN может видеть всё;
- OWNER/MANAGER видят только свою компанию.
