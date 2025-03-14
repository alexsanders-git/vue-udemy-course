export interface IEvents {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
}

export interface IBooking {
  id: string;
  userId: string;
  eventId: string;
  eventTitle: string;
  status: 'pending' | 'confirmed';
}
