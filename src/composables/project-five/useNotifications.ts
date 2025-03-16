import { ref } from 'vue';

interface INotification {
  id: number;
  message: string;
}

const notifications = ref<INotification[]>([]);

const addNotification = (message: string) => {
  const id = Date.now();

  notifications.value.push({
    id,
    message,
  });

  setTimeout(() => removeNotification(id), 5000);
};

const removeNotification = (id: number) => {
  notifications.value = notifications.value.filter((n) => n.id !== id);
};

export default function useNotifications() {
  return { notifications, addNotification, removeNotification };
}
