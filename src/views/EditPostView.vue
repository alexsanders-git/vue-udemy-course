<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { usePostsStore } from '@/stores/posts.ts';

const router = useRouter();
const route = useRoute();
const store = usePostsStore();

const name = ref<string>('');
const description = ref<string>('');

const fetchPost = () => {
  const id = route.params.id as string;

  const post = store.getPostById(id);

  if (post) {
    name.value = post.name;
    description.value = post.description;
  } else {
    router.push({ name: 'not-found' });
  }
};

const editPost = () => {
  const postId = route.params.id as string;

  store.editPost({
    id: postId,
    name: name.value,
    description: description.value
  });

  router.push({
    name: 'post',
    params: {
      id: postId
    }
  });
};

onMounted(fetchPost);
</script>

<template>
  <div>Add post</div>
  <form @submit.prevent="editPost">
    <div>
      <input type="text" v-model="name" placeholder="Post name" required>
    </div>

    <div>
      <textarea v-model="description" placeholder="Post description"></textarea>
    </div>

    <button type="submit">Save</button>
  </form>
</template>
