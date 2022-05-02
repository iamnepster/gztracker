import create from "zustand"

export const usePerformedWorkStore = create((set) => ({
  performedWorkList: [],
  addPerformedWork: (time) =>
    set((state) => ({ performedWorkList: [...state.performedWorkList, time] })),
}))
