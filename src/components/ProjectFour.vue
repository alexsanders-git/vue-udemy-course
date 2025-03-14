<script setup lang="ts">
import { h, onMounted, ref } from 'vue';
import BookingItem from '@/components/BookingItem.vue';
import type { IBooking, IEvents } from '@/types.ts';
import SkeletonBookingItem from '@/components/SkeletonBookingItem.vue';
import EventList from '@/components/EventList.vue';

const bookings = ref<IBooking[]>([]);
const bookingsLoading = ref<boolean>(false);

const url = import.meta.env.VITE_API_URL;

const fetchBookings = async () => {
  try {
    bookingsLoading.value = true;

    const response = await fetch(`${url}/bookings`);

    bookings.value = await response.json();
  } catch (e) {
    console.error(e);
  } finally {
    bookingsLoading.value = false;
  }
};

const findBookingById = (id: string) => bookings.value.findIndex((b) => b.id === id);

const handleRegistration = async (event: IEvents) => {
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

onMounted(() => {
  fetchBookings();
});
</script>

<template>
  <div class="container mx-auto p-5">
    <div class="flex items-center justify-center min-h-screen">
      <div class="w-full max-w-5xl space-y-8">
        <h1 class="text-3xl font-medium">Event Booking App</h1>

        <h2 class="text-2xl font-medium">All Event</h2>

        <EventList @register="handleRegistration($event)" />

        <h2 class="text-2xl font-medium">Your Booking</h2>
        <div class="grid grid-cols-1 gap-4">
          <template v-if="bookingsLoading">
            <SkeletonBookingItem v-for="i in 2" :key="i" />
          </template>

          <template v-else>
            <BookingItem
              v-for="booking in bookings"
              :key="booking.id"
              :title="booking.eventTitle"
              :status="booking.status"
              @cancel="cancelBooking(booking.id)"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
