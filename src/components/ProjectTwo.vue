<script setup lang="ts">
import { ref } from 'vue';

interface IPhoto {
  id: number;
  url: string;
  isFavorite: boolean;
}

const photos = ref<IPhoto[]>([]);
const newPhotoURL = ref('');

const addPhoto = () => {
  if (newPhotoURL.value !== '') {
    const photo: IPhoto = {
      id: Date.now(),
      url: newPhotoURL.value,
      isFavorite: false,
    };

    photos.value.push(photo);

    newPhotoURL.value = '';
  }
};

const removePhoto = (id: number) => {
  photos.value = photos.value.filter((p) => p.id !== id);
};

const toggleFavorite = (photo: IPhoto) => {
  photo.isFavorite = !photo.isFavorite;
};
</script>

<template>
  <div class="container mx-auto p-5">
    <div class="flex items-center justify-center min-h-screen">
      <div class="w-full max-w-4xl p-5 text-center shadow-lg">
        <form class="flex gap-2 mb-4" @submit.prevent="addPhoto">
          <input
            class="grow p-2 border border-slate-300 focus:border-slate-400 outline-none rounded-md"
            placeholder="Enter image URl"
            v-model="newPhotoURL"
          />

          <button
            class="w-fit py-2 px-6 font-medium text-white bg-violet-500 hover:bg-violet-600 rounded-md cursor-pointer"
            type="submit"
          >
            Add photo
          </button>
        </form>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          v-if="photos.length"
        >
          <div
            class="relative w-full h-[200px] p-1 border"
            v-for="photo in photos"
            :key="photo.id"
            @click="removePhoto(photo.id)"
          >
            <img class="w-full h-full object-cover" :src="photo.url" />

            <button
              class="absolute bottom-2 right-4 text-2xl cursor-pointer"
              :class="{ 'text-orange-600': photo.isFavorite, 'text-white': !photo.isFavorite }"
              @click.stop="toggleFavorite(photo)"
            >
              ★
            </button>
          </div>
        </div>

        <p class="text-lg text-gray-500" v-else>No photos added yet. Add some!</p>
      </div>
    </div>
  </div>
</template>
