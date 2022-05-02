import React, { useRef, useState } from "react"
import useTimer from "../hooks/useTimer"
import { formatTime } from "../utils/timerFormatter"
import "./dashboard.css"

export default function Dashboard() {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handleStop,
    handleResume,
    handleReset,
  } = useTimer(0)

  return (
    <div className="dashboard-container">
      <div className="my-16 text-8xl font-digital text-center font-bold">
        <b>{formatTime(timer)}</b>
      </div>
      <div className="dashboard-actions">
        <button
          className="px-8 mx-2 bg-cyan-600 disabled:bg-cyan-800 rounded-md"
          disabled={isActive}
          onClick={handleStart}
        >
          Start
        </button>
        {!isPaused ? (
          <button
            className="px-8 mx-2 bg-cyan-600 disabled:bg-cyan-800 rounded-md"
            onClick={handleStop}
          >
            Pause
          </button>
        ) : (
          <button
            className="px-8 mx-2 bg-cyan-600 disabled:bg-cyan-800 rounded-md"
            onClick={handleResume}
          >
            Resume
          </button>
        )}
        <button
          className="px-8 mx-2 bg-cyan-600 disabled:bg-cyan-800 rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
