<script setup lang="ts">
import { onMounted } from 'vue';
import SkeletonBookingItem from '@/components/SkeletonBookingItem.vue';
import BookingItem from '@/components/BookingItem.vue';
import useBookings from '@/composables/useBookings.ts';
import ErrorCard from '@/components/ErrorCard.vue';

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
        <BookingItem
          v-for="booking in bookings"
          :key="booking.id"
          :title="booking.eventTitle"
          :status="booking.status"
          @cancel="cancelBooking(booking.id)"
        />
      </template>
    </div>
  </template>
</template>
