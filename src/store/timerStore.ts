import create from "zustand"
import { TimerModel } from "../model/TimerModel"
import PersistentStorage from "./persistantStore"

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
