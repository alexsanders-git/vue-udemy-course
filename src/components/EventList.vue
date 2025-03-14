<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SkeletonEventCard from '@/components/SkeletonEventCard.vue';
import EventCard from '@/components/EventCard.vue';
import type { IEvents } from '@/types.ts';
import AppButton from '@/components/AppButton.vue';

defineEmits(['register']);

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
    <div
      class="flex flex-col items-center space-y-4 p-4 border border-gray-200 bg-white rounded-md"
    >
      <span class="text-lg text-red-500">{{ error }}</span>

      <AppButton class="text-sm" variant="danger" @click="fetchEvents">Retry now</AppButton>
    </div>
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
            @register="$emit('register', event)"
          />
        </template>

        <template v-else>
          <div class="col-span-2 text-xl text-center text-gray-500">No events yet.</div>
        </template>
      </template>
    </div>
  </template>
</template>
