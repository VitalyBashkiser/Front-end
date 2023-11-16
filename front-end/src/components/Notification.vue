<template>
  <div>
    <h2>{{ $t('notifications.title') }}</h2>
    <ul>
      <li v-for="notification in notifications" :key="notification.id">
        <span>{{ notification.text }}</span>
        <button @click="markAsRead(notification.id)">{{ $t('notifications.markAsRead') }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      notifications: [],
    };
  },
  methods: {
    fetchNotifications() {
      axios.get('/api/notifications/')
        .then(response => {
          this.notifications = response.data;
        })
        .catch(error => {
          console.error('Error fetching notifications', error);
        });
    },
    markAsRead(notificationId) {
      axios.put(`/api/notifications/${notificationId}/mark-as-read/`)
        .then(() => {
          // Update the local state after marking as read
          this.notifications = this.notifications.filter(notification => notification.id !== notificationId);
        })
        .catch(error => {
          console.error('Error marking notification as read', error);
        });
    },
  },
  mounted() {
    this.fetchNotifications();
  },
};
</script>
