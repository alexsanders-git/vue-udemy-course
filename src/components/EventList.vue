<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SkeletonEventCard from '@/components/SkeletonEventCard.vue';
import EventCard from '@/components/EventCard.vue';
import type { IEvents } from '@/types.ts';

defineEmits(['register']);

const events = ref<IEvents[]>([]);
const loading = ref<boolean>(false);

const url = import.meta.env.VITE_API_URL;

const fetchEvents = async () => {
  try {
    loading.value = true;

    const response = await fetch(`${url}/events`);

    events.value = await response.json();
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
};

onMounted(() => fetchEvents());
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <template v-if="loading">
      <SkeletonEventCard v-for="i in 4" :key="i" />
    </template>

    <template v-else>
      <EventCard
        v-for="event in events"
        :key="event.id"
        :title="event.title"
        :date="event.date"
        :description="event.description"
        @register="$emit('register', event)"
      />
    </template>
  </div>
</template>
