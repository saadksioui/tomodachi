import { create } from 'zustand';

interface User {
  _id: string;
  username: string;
  email: string;
  profile_picture: string;
  bio: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));