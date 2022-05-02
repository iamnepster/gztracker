import create from "zustand"
import { PerformedWorkModel } from "../model/PerformedWorkModel"
import PersistantStore from "./persistantStore"

const persistentStore = new PersistantStore<PerformedWorkModel[]>(
  "performedWorkList"
)

export interface PerformedWorkState {
  performedWorkList: PerformedWorkModel[]
  addPerformedWork: (performedWork: PerformedWorkModel) => void
}

export const usePerformedWorkStore = create<PerformedWorkState>((set) => ({
  performedWorkList: persistentStore.get(),
  addPerformedWork: (performedWork: PerformedWorkModel) =>
    set((state) => {
      const newPerformedWorkList = [...state.performedWorkList, performedWork]
      persistentStore.set(newPerformedWorkList)
      return { performedWorkList: [...state.performedWorkList, performedWork] }
    }),
}))
