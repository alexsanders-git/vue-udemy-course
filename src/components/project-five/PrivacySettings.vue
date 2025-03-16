<script setup lang="ts">
import useSettings from '@/composables/project-five/useSettings.ts';
import AppButton from '@/components/AppButton.vue';
import useNotifications from '@/composables/project-five/useNotifications.ts';

const { privacy } = useSettings();
const { addNotification } = useNotifications();

const save = () => {
  addNotification('Privacy setting were saved successfully');
};
</script>

<template>
  <div>
    <h2 class="mb-4 text-2xl">Privacy</h2>

    <form class="space-y-4 mx-auto" @submit.prevent="save">
      <div class="space-y-2">
        <label>Visibility</label>
        <select v-model="privacy.visibility">
          <option value="private">Private</option>
          <option value="public">Public</option>
        </select>
      </div>

      <label class="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" v-model="privacy.searchEngineIndexing" />
        <span>Search engine indexing</span>
      </label>

      <AppButton>Save</AppButton>
    </form>
  </div>
</template>

<style scoped></style>
