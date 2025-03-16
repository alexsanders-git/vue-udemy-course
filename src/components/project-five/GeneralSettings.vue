<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import useSettings from '@/composables/project-five/useSettings.ts';
import useNotifications from '@/composables/project-five/useNotifications.ts';

const { general } = useSettings();
const { addNotification } = useNotifications();

const save = () => {
  addNotification('General setting were saved successfully');
};
</script>

<template>
  <div>
    <h2 class="mb-4 text-2xl">General</h2>

    <form class="space-y-4 mx-auto" @submit.prevent="save">
      <div class="space-y-2">
        <label>Username</label>
        <input type="text" v-model="general.username" />
      </div>

      <div class="space-y-2">
        <label>Email</label>
        <input type="email" v-model="general.email" />
      </div>

      <div class="space-y-2">
        <label>About Me</label>
        <textarea v-model="general.about"></textarea>
      </div>

      <div class="space-y-2">
        <label>Gender</label>

        <label class="cursor-pointer">
          <input type="radio" value="male" v-model="general.gender" />
          <span>Male</span>
        </label>

        <label class="cursor-pointer">
          <input type="radio" value="female" v-model="general.gender" />
          <span>Female</span>
        </label>

        <label class="cursor-pointer">
          <input type="radio" value="other" v-model="general.gender" />
          <span>Other</span>
        </label>
      </div>

      <div class="space-y-2">
        <label>Country</label>
        <select v-model="general.country">
          <option>USA</option>
          <option>United Kingdom</option>
          <option>Canada</option>
          <option>Australia</option>
          <option>Germany</option>
          <option>France</option>
          <option>Italy</option>
          <option>Spain</option>
          <option>Japan</option>
          <option>India</option>
        </select>
      </div>

      <AppButton>Save</AppButton>
    </form>
  </div>
</template>
