<script setup lang="ts">
defineEmits(['click']);
</script>

<template>
  <button
    class="w-fit py-2 px-6 font-medium text-white bg-violet-500 hover:bg-violet-600 rounded-md cursor-pointer"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
