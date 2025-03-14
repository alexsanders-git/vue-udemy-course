<script setup lang="ts">
import Skeleton from '@/components/Skeleton.vue';
</script>

<template>
  <Skeleton>
    <div class="flex justify-between items-center p-4">
      <div class="flex gap-2 w-full">
        <div class="w-1/3 h-4 bg-gray-300 rounded"></div>
        <div class="w-36 h-4 bg-gray-300 rounded"></div>
      </div>

      <div class="w-24 h-8 bg-gray-300 rounded-md"></div>
    </div>
  </Skeleton>
</template>
