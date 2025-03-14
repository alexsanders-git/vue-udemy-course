<script setup lang="ts">
import EventList from '@/components/EventList.vue';
import BookingList from '@/components/BookingList.vue';
</script>

<template>
  <div class="container mx-auto p-5">
    <div class="flex items-center justify-center min-h-screen">
      <div class="w-full max-w-5xl space-y-8">
        <h1 class="text-3xl font-medium">Event Booking App</h1>

        <h2 class="text-2xl font-medium">All Event</h2>
        <EventList />

        <h2 class="text-2xl font-medium">Your Booking</h2>
        <BookingList />
      </div>
    </div>
  </div>
</template>
