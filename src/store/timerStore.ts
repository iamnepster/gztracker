import create from "zustand"
import PersistentStorage from "./persistentStorage"
import { TimerModel } from "../model/TimerModel"

const timerStorage = new PersistentStorage<TimerModel>("timerState")

export interface TimerState {
  timer: TimerModel
  setTimerState: (timerState: TimerModel) => void
}

export const useTimerStore = create<TimerState>((set) => ({
  timer: timerStorage.get(),
  setTimerState: (timerState) =>
    set((state) => {
      timerStorage.set(timerState)
      return { ...state, timer: timerState }
    }),
}))
