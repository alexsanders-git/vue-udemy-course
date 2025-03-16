<script setup lang="ts">
import { onMounted } from 'vue';
import SkeletonBookingItem from '@/components/project-four/SkeletonBookingItem.vue';
import BookingItem from '@/components/project-four/BookingItem.vue';
import useBookings from '@/composables/useBookings.ts';
import ErrorCard from '@/components/project-four/ErrorCard.vue';

const { bookings, loading, error, fetchBookings, cancelBooking } = useBookings();

onMounted(() => {
  fetchBookings();
});
</script>

<template>
  <template v-if="error">
    <ErrorCard :retry="fetchBookings">{{ error }}</ErrorCard>
  </template>

  <template v-else>
    <div class="grid grid-cols-1 gap-4">
      <template v-if="loading">
        <SkeletonBookingItem v-for="i in 2" :key="i" />
      </template>

      <template v-else>
        <template v-if="bookings.length">
          <BookingItem
            v-for="booking in bookings"
            :key="booking.id"
            :title="booking.eventTitle"
            :status="booking.status"
            @cancel="cancelBooking(booking.id)"
          />
        </template>

        <template v-else>
          <div class="col-span-2 text-xl text-center text-gray-500">No booking yet.</div>
        </template>
      </template>
    </div>
  </template>
</template>
