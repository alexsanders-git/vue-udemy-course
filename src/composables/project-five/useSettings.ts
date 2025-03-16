import { ref, watch } from 'vue';

type Visibility = 'public' | 'private';

interface ISettings {
  general: IGeneralSettings;
  notifications: INotificationsSettings;
  privacy: IPrivacySettings;
}

type SettingsKey = keyof ISettings;

interface IGeneralSettings {
  username: string;
  email: string;
  about: string;
  gender: string;
  country: string;
}

interface INotificationsSettings {
  sms: boolean;
  email: boolean;
}

interface IPrivacySettings {
  visibility: Visibility;
  searchEngineIndexing: boolean;
}

const init = <T extends SettingsKey>(key: T, defaults: ISettings[T]) => {
  const stored = localStorage.getItem(key);

  return stored !== null ? JSON.parse(stored) : defaults;
};

const watcher =
  <T extends SettingsKey>(key: T) =>
  (value: ISettings[T]) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

const general = ref<IGeneralSettings>(
  init('general', {
    username: '',
    email: '',
    about: '',
    country: 'USA',
    gender: 'male',
  }),
);

const notifications = ref<INotificationsSettings>(
  init('notifications', {
    sms: false,
    email: false,
  }),
);

const privacy = ref<IPrivacySettings>(
  init('privacy', {
    visibility: 'public',
    searchEngineIndexing: false,
  }),
);

watch(general, watcher('general'), { deep: true });
watch(notifications, watcher('notifications'), { deep: true });
watch(privacy, watcher('privacy'), { deep: true });

export default function useSettings() {
  return { general, notifications, privacy };
}
