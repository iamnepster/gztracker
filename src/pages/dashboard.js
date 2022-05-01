import React, { useState } from "react"
import "./dashboard.css"

export default function Dashboard() {
  let interval = null
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  const handleStart = () => {
    clearInterval(interval)
    interval = setInterval(timer, 1000)
  }

  const timer = () => {
    setSeconds(seconds + 1)
  }

  const renderTime = (time) => {
    return time < 10 ? "0" + time : time
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-timer">00:00:{renderTime(seconds)}</div>
      <div className="dashboard-actions">
        <button onClick={(_) => handleStart()}>Start</button>
        <button>Stop</button>
      </div>
    </div>
  )
}
