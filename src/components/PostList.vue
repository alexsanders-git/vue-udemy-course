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
        <li v-for="post in posts" :key="post.id" class="mb-2">
          <RouterLink :to="{ name: 'post', params: { id: post.id } }"
                      class="text-indigo-800 hover:underline">
            {{ post.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>

    <div v-else class="text-indigo-500">No posts found!</div>
  </div>
</template>
