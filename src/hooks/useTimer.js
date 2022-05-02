import { useState, useRef } from "react"

export default function useTimer(inititalState = 0) {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

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
