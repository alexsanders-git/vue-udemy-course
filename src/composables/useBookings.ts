import { ref } from 'vue';
import type { IBooking, IEvents } from '@/types.ts';

const bookings = ref<IBooking[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

const url = import.meta.env.VITE_API_URL;

const fetchBookings = async () => {
  try {
    loading.value = true;
    error.value = null;

    const response = await fetch(`${url}/bookings`);

    bookings.value = await response.json();
  } catch (e) {
    error.value = 'Something went wrong. Please try again later';

    console.error(e);
  } finally {
    loading.value = false;
  }
};

const findBookingById = (id: string) => bookings.value.findIndex((b) => b.id === id);

const handleBookings = async (event: IEvents) => {
  if (bookings.value.some((b) => b.eventId === event.id && b.userId === '1')) {
    alert('You are already registered for this event');
    return;
  }

  const newBooking: IBooking = {
    id: Date.now().toString(),
    userId: '1',
    eventId: event.id,
    eventTitle: event.title,
    status: 'pending',
  };

  bookings.value.push(newBooking);

  try {
    const response = await fetch(`${url}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newBooking,
        status: 'confirmed',
      }),
    });

    if (response.ok) {
      const index = findBookingById(newBooking.id);

      bookings.value[index] = await response.json();
    } else {
      throw new Error('Failed to confirm booking');
    }
  } catch (e) {
    console.error(e);

    bookings.value = bookings.value.filter((b) => b.id !== newBooking.id);
  }
};

const cancelBooking = async (bookingId: string) => {
  const index = findBookingById(bookingId);
  const originalBooking = bookings.value[index];

  bookings.value.splice(index, 1);

  try {
    const response = await fetch(`${url}/bookings/${bookingId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Booking could not be cancelled');
    }
  } catch (e) {
    console.error(e);

    bookings.value.splice(index, 0, originalBooking);
  }
};

export default function useBookings() {
  return { bookings, loading, error, fetchBookings, handleBookings, cancelBooking };
}
