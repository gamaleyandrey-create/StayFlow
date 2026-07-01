export class CreatePropertyDto {
  title: string;
  address: string;
  city?: string;
  country?: string;
  bedrooms?: number;
  bathrooms?: number;
  maxGuests?: number;
  wifiName?: string;
  wifiPassword?: string;
  doorCode?: string;
  instructions?: string;
}
