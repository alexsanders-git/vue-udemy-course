<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <h1>Home</h1>

    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'post', params: { id: 1 } }">Post 1</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'post', params: { id: 2 } }">Post 2</RouterLink>
        </li>
      </ul>
    </nav>
  </main>
</template>
