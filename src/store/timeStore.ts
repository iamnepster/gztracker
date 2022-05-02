import create from "zustand"
import { PerformedWorkModel } from "../model/PerformedWorkModel"

export interface PerformedWorkState {
  performedWorkList: PerformedWorkModel[]
  addPerformedWork: (performedWork: PerformedWorkModel) => void
}

export const usePerformedWorkStore = create<PerformedWorkState>((set) => ({
  performedWorkList: [],
  addPerformedWork: (performedWork: PerformedWorkModel) =>
    set((state) => ({
      performedWorkList: [...state.performedWorkList, performedWork],
    })),
}))
