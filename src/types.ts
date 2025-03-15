import type { Component } from 'vue';

// Project Four
export interface IEvents {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
}

export interface IBooking {
  id: string;
  userId: string;
  eventId: string;
  eventTitle: string;
  status: 'pending' | 'confirmed';
}

// Project Five
export type TabKey = 'general' | 'notifications' | 'privacy';

export interface ITab {
  key: TabKey;
  label: string;
  component: Component;
}
