<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
</script>

<template>
  <div>
    <h2 class="mb-4 text-2xl">General</h2>
    <form class="space-y-4 mx-auto">
      <div class="space-y-2">
        <label>Username</label>
        <input type="text" />
      </div>

      <div class="space-y-2">
        <label>Email</label>
        <input type="email" />
      </div>

      <div class="space-y-2">
        <label>About Me</label>
        <textarea></textarea>
      </div>

      <div class="space-y-2">
        <label>Gender</label>

        <label>
          <input type="radio" value="male" />
          <span>Male</span>
        </label>

        <label>
          <input type="radio" value="female" />
          <span>Female</span>
        </label>

        <label>
          <input type="radio" value="other" />
          <span>Other</span>
        </label>
      </div>

      <div class="space-y-2">
        <label>Country</label>
        <select>
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
