<script setup lang="ts">
interface IProps {
  variant: 'primary' | 'danger';
}

const props = withDefaults(defineProps<IProps>(), {
  variant: 'primary',
});

const variants = {
  primary: 'text-white bg-violet-500 hover:bg-violet-600',
  danger: 'text-white bg-red-500 hover:bg-red-600',
};

defineEmits(['click']);
</script>

<template>
  <button
    :class="['w-fit py-2 px-6 font-medium rounded-md cursor-pointer', variants[props.variant]]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
