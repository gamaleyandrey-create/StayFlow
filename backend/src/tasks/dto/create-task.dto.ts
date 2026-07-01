export class CreateTaskDto {
  propertyId: string;
  bookingId?: string;
  assignedWorkerId?: string;
  type: string;
  title: string;
  description?: string;
  date?: string;
  price?: number;
  priority?: string;
}
