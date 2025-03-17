<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

console.log(route.params.id);

onMounted(() => console.log('Fetching data inside onMounted'));

watch(
  () => route.params.id,
  () => console.log('Fetching inside watch'),
  {
    immediate: true,
  },
);
</script>

<template>
  <div>Post {{ $route.params.id }}</div>

  <nav>
    <ul>
      <li>
        <RouterLink :to="{ name: 'post', params: { id: 1 } }">Post 1</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'post', params: { id: 3 } }">Post 3</RouterLink>
      </li>
    </ul>
  </nav>
</template>
