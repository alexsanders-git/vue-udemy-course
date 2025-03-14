<script setup lang="ts">
import Skeleton from '@/components/Skeleton.vue';
</script>

<template>
  <Skeleton>
    <div class="h-12 p-4 bg-gray-300 border-b border-gray-200"></div>
    <div class="h-4 p-4 bg-gray-300 border-b border-gray-200"></div>
    <div class="h-20 p-4 bg-gray-300"></div>
    <div class="flex justify-end p-4">
      <div class="w-24 h-8 bg-gray-300 rounded-md"></div>
    </div>
  </Skeleton>
</template>
