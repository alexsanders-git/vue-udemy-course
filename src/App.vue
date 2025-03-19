<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <ul class="flex gap-4 p-8 bg-indigo-200 text-lg text-indigo-800">
        <li>
          <RouterLink :to="{ name: 'home' }" class="hover:underline">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'favorites' }" class="hover:underline">Favorites</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'add-post' }" class="hover:underline">Add Post</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <main class="h-screen p-4 bg-indigo-100">
    <RouterView />
  </main>
</template>
