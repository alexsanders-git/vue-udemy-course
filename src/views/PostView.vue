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
    <h1>{{ post?.name }}</h1>
    <p>{{ post?.description }}</p>

    <div>
      <RouterLink :to="{name: 'edit-post', params: {id: post?.id}}">Edit</RouterLink>
    </div>

    <div>
      <button v-if="post" @click="store.toggleFavorite(post.id)">
        {{ isFavorite ? 'Remove from favorite' : 'Add to favorite' }}
      </button>
    </div>
  </div>
</template>
