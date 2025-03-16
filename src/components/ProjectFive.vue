<script setup lang="ts">
import { computed, ref } from 'vue';
import TabLink from '@/components/project-five/TabLink.vue';
import FadeTransition from '@/components/project-five/FadeTransition.vue';
import GeneralSettings from '@/components/project-five/GeneralSettings.vue';
import NotificationsSettings from '@/components/project-five/NotificationsSettings.vue';
import PrivacySettings from '@/components/project-five/PrivacySettings.vue';
import NotificationsList from '@/components/project-five/NotificationsList.vue';
import type { ITab, TabKey } from '@/types.ts';

const tabs: ITab[] = [
  {
    key: 'general',
    label: 'General',
    component: GeneralSettings,
  },
  {
    key: 'notifications',
    label: 'Notifications',
    component: NotificationsSettings,
  },
  {
    key: 'privacy',
    label: 'Privacy',
    component: PrivacySettings,
  },
];

const currentTab = ref<TabKey>('general');

const currentTabComponent = computed(
  () => tabs.find((tab) => tab.key === currentTab.value)?.component,
);
</script>

<template>
  <main class="max-w-4xl mx-auto px-4">
    <nav class="mb-4 font-medium text-center text-gray-500 border-b border-gray-200">
      <ul class="flex flex-wrap -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
          <TabLink :tab="tab" :currentTab="currentTab" @click="currentTab = tab.key" />
        </li>
      </ul>
    </nav>

    <FadeTransition>
      <KeepAlive>
        <component :is="currentTabComponent" />
      </KeepAlive>
    </FadeTransition>

    <NotificationsList />
  </main>
</template>
