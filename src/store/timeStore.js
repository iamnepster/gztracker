import create from "zustand"

export const useTimeStore = create((set) => ({
  times: [],
  addTime: (time) => set((state) => ({ times: [...state.times, time] })),
}))
