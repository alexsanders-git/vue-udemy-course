<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { IPost } from '@/stores/posts.ts';

interface IProps {
  posts: IPost[];
}

defineProps<IProps>();
</script>

<template>
  <div>
    <nav v-if="posts.length > 0">
      <ul>
        <li v-for="post in posts" :key="post.id">
          <RouterLink :to="{ name: 'post', params: { id: post.id } }">{{ post.name }}</RouterLink>
        </li>
      </ul>
    </nav>

    <div v-else>No posts found!</div>
  </div>
</template>
