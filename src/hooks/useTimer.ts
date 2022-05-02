import { useState, useRef } from "react"
import { TimerModel } from "../model/TimerModel"

export default function useTimer(inititalState?: TimerModel) {
  const [timer, setTimer] = useState(inititalState?.timer || 0)
  const [isActive, setIsActive] = useState(inititalState?.isActive || false)
  const [isPaused, setIsPaused] = useState(inititalState?.isPaused || false)
  const intervalRef: any = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(false)
    intervalRef.current = setInterval(
      () => setTimer((timer) => timer + 1),
      1000
    )
  }

  const handleStop = () => {
    clearInterval(intervalRef.current)
    setIsPaused(true)
  }

  const handleResume = () => {
    setIsPaused(false)
    intervalRef.current = setInterval(
      () => setTimer((timer) => timer + 1),
      1000
    )
  }

  const handleReset = () => {
    clearInterval(intervalRef.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  return {
    timer,
    isActive,
    isPaused,
    handleStart,
    handleStop,
    handleResume,
    handleReset,
  }
}
