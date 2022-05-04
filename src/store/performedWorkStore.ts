import create from "zustand"
import PersistantStorage from "./persistentStorage"
import { PerformedWorkModel } from "../model/PerformedWorkModel"

const persistentStorage = new PersistantStorage<PerformedWorkModel[]>(
  "performedWorkList"
)

export interface PerformedWorkState {
  performedWorkList: PerformedWorkModel[]
  addPerformedWork: (performedWork: PerformedWorkModel) => void
}

export const usePerformedWorkStore = create<PerformedWorkState>((set) => ({
  performedWorkList: persistentStorage.get(),
  addPerformedWork: (performedWork: PerformedWorkModel) =>
    set((state) => {
      const newPerformedWorkList = [...state.performedWorkList, performedWork]
      persistentStorage.set(newPerformedWorkList)
      return { performedWorkList: [...state.performedWorkList, performedWork] }
    }),
}))
