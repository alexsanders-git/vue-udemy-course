<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { usePostsStore } from '@/stores/posts.ts';

const route = useRoute();
const store = usePostsStore();

const post = computed(() => store.getPostById(route.params.id as string));

const isFavorite = computed(
  () => post.value ? store.isFavorite(post.value.id) : false
);
</script>

<template>
  <div>
    <h1 class="mb-4 text-2xl text-indigo-600 font-bold">{{ post?.name }}</h1>
    <p class="mb-8">{{ post?.description }}</p>

    <div class="flex items-center gap-4">
      <RouterLink
        :to="{name: 'edit-post', params: {id: post?.id}}"
        class="flex w-fit py-2 px-6 font-medium rounded-md cursor-pointer text-white bg-violet-500 hover:bg-violet-600"
      >
        Edit
      </RouterLink>

      <button
        v-if="post"
        class="w-fit py-2 px-6 font-medium rounded-md cursor-pointer text-white bg-violet-500 hover:bg-violet-600"
        @click="store.toggleFavorite(post.id)"
      >
        {{ isFavorite ? 'Remove from favorite' : 'Add to favorite' }}
      </button>
    </div>
  </div>
</template>
