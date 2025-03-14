<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ErrorCard from '@/components/ErrorCard.vue';
import SkeletonEventCard from '@/components/SkeletonEventCard.vue';
import EventCard from '@/components/EventCard.vue';
import useBookings from '@/composables/useBookings.ts';
import type { IEvents } from '@/types.ts';

const { handleBookings } = useBookings();

const events = ref<IEvents[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

const url = import.meta.env.VITE_API_URL;

const fetchEvents = async () => {
  try {
    loading.value = true;
    error.value = null;

    const response = await fetch(`${url}/events`);

    events.value = await response.json();
  } catch (e) {
    error.value = 'Something went wrong. Please try again later';

    console.error(e);
  } finally {
    loading.value = false;
  }
};

onMounted(() => fetchEvents());
</script>

<template>
  <template v-if="error">
    <ErrorCard :retry="fetchEvents">{{ error }}</ErrorCard>
  </template>

  <template v-else>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <template v-if="loading">
        <SkeletonEventCard v-for="i in 4" :key="i" />
      </template>

      <template v-else>
        <template v-if="events.length">
          <EventCard
            v-for="event in events"
            :key="event.id"
            :title="event.title"
            :date="event.date"
            :description="event.description"
            @register="handleBookings(event)"
          />
        </template>

        <template v-else>
          <div class="col-span-2 text-xl text-center text-gray-500">No events yet.</div>
        </template>
      </template>
    </div>
  </template>
</template>
