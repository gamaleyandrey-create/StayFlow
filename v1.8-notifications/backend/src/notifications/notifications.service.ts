import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  private notifications: any[] = [];

  findAll() {
    return this.notifications;
  }

  create(data: any) {
    const notification = {
      id: String(Date.now()),
      title: data.title,
      body: data.body,
      type: data.type || 'INFO',
      isRead: false,
      createdAt: new Date(),
    };

    this.notifications.push(notification);
    return notification;
  }

  markRead(id: string) {
    const item = this.notifications.find((n) => n.id === id);
    if (item) item.isRead = true;
    return item || { error: 'Notification not found' };
  }
}
