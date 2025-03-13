<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import BookingItem from '@/components/BookingItem.vue';
</script>

<template>
  <div class="container mx-auto p-5">
    <div class="flex items-center justify-center min-h-screen">
      <div class="w-full max-w-5xl space-y-8">
        <h1 class="text-3xl font-medium">Event Booking App</h1>

        <h2 class="text-2xl font-medium">All Event</h2>

        <div class="grid grid-cols-2 gap-8">
          <EventCard
            :key="i"
            v-for="i in 8"
            title="Vue Conference 2025"
            date="2025-03-28"
            description="Conference about Vue and JS"
            @register="console.log('Reg')"
          />
        </div>

        <h2 class="text-2xl font-medium">Your Booking</h2>
        <div class="grid grid-cols-1 gap-4">
          <BookingItem :key="i" v-for="i in 3" />
        </div>
      </div>
    </div>
  </div>
</template>
