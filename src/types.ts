export interface Game {
  id: string;
  name: string;
  icon: string;
}

export interface Slot {
  id: string;
  gameId: string;
  time: string;
  duration: number;
  maxBookings: number;
  prices: {
    solo?: number;
    duo?: number;
    squad?: number;
  };
}

export interface Player {
  id: string;
  name: string;
  username: string;
  email?: string;
  gameId: string;
  isBlocked: boolean;
}

export interface Report {
  id: string;
  playerId: string;
  gameId: string;
  slotTime: string;
  message: string;
  screenshot?: string;
  isReviewed: boolean;
}

export interface Message {
  id: string;
  slotId: string;
  userId: string;
  username: string;
  content: string;
  timestamp: number;
  isAdmin: boolean;
}