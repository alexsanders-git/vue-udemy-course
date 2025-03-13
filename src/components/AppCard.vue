<script setup lang="ts"></script>

<template>
  <div class="border border-gray-200 bg-white rounded-md">
    <div
      v-if="$slots.header"
      :class="{
        'p-4 font-medium text-xl': true,
        'border-b border-gray-200': $slots.footer || $slots.default,
      }"
    >
      <slot name="header"></slot>
    </div>

    <div v-if="$slots.default" :class="{ 'p-4': true, 'border-b border-gray-200': $slots.footer }">
      <slot></slot>
    </div>

    <div v-if="$slots.footer" class="p-4">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
