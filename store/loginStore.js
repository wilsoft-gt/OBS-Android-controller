import { create } from "zustand";

const initialState = {
  isLoggedIn: false
}

export const loginStore = create((set) => ({
  ...initialState,
  setLoggin: (status) => set({ isLoggedIn: status})
}))