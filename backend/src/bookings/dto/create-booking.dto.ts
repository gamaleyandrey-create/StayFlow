export class CreateBookingDto {
  propertyId: string;
  guestName: string;
  guestEmail?: string;
  guestPhone?: string;
  checkInDate: string;
  checkOutDate: string;
  guestsCount?: number;
  amount?: number;
  source?: string;
}
