<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import useSettings from '@/composables/project-five/useSettings.ts';
import useNotifications from '@/composables/project-five/useNotifications.ts';

const { notifications } = useSettings();
const { addNotification } = useNotifications();

const save = () => {
  addNotification('Notifications setting were saved successfully');
};
</script>

<template>
  <div>
    <h2 class="mb-4 text-2xl">Notifications</h2>

    <form class="space-y-4 mx-auto" @submit.prevent="save">
      <label class="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" v-model="notifications.sms" />
        <span>SMS notifications</span>
      </label>

      <label class="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" v-model="notifications.email" />
        <span>Email notifications</span>
      </label>

      <AppButton>Save</AppButton>
    </form>
  </div>
</template>

<style scoped></style>
