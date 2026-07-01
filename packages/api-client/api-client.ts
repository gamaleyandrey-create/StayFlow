export class StayFlowApiClient {
  constructor(private readonly baseUrl: string) {}

  async getProperties() {
    const res = await fetch(`${this.baseUrl}/properties`);
    return res.json();
  }

  async createBooking(data: unknown) {
    const res = await fetch(`${this.baseUrl}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  }

  async getTasks() {
    const res = await fetch(`${this.baseUrl}/tasks`);
    return res.json();
  }
}
