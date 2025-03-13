<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import AppButton from '@/components/AppButton.vue';
</script>

<template>
  <AppCard>
    <div class="flex justify-between">
      <div>Booking to Vue Conference</div>
      <AppButton class="text-sm" variant="danger">Cancel</AppButton>
    </div>
  </AppCard>
</template>
