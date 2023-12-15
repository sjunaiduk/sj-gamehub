import { create } from "zustand";

export interface User {
  email: string;
  name: string;
}
interface AuthStore {
  user?: User;
  login: (u: User) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: {} as User,
  login: (u: User) => set({ user: { ...u } }),
  logout: () => set({ user: {} as User }),
}));

export default useAuthStore;
