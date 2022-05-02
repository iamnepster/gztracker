import React from "react"
import useTimer from "../../hooks/useTimer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFloppyDisk,
  faPlay,
  faPause,
  faArrowRotateLeft,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons"
import { formatTime } from "../../utils/timerFormatter"
import "./dashboard.css"
import { useTimeStore } from "../../store/timeStore"
import { Link } from "react-router-dom"
import dayjs from "dayjs"

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
  const addTime = useTimeStore((state) => state.addTime)

  const handleSave = () => {
    addTime({
      time: timer,
      date: dayjs().format("DD MMM YYYY"),
    })
    handleReset()
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="mt-4 mr-8 px-4 py-2 rounded-md text-2xl hover:bg-gray-700">
          <Link to="/times">
            <FontAwesomeIcon icon={faClockRotateLeft}></FontAwesomeIcon>
          </Link>
        </div>
      </header>
      <main className="dashboard-main">
        <div className="my-16 text-8xl font-digital text-center font-medum">
          {formatTime(timer)}
        </div>
        <div className="dashboard-actions">
          <button
            className="px-8 py-1 mx-2 bg-cyan-600 disabled:bg-cyan-800 rounded-md"
            disabled={isActive}
            onClick={handleStart}
          >
            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon> Start
          </button>
          {!isPaused ? (
            <button
              className="px-8 py-1 mx-2 bg-cyan-600 disabled:bg-cyan-800 rounded-md"
              disabled={!isActive}
              onClick={handleStop}
            >
              <FontAwesomeIcon icon={faPause}></FontAwesomeIcon> Pause
            </button>
          ) : (
            <button
              className="px-8 py-1 mx-2 bg-cyan-600 disabled:bg-cyan-800 rounded-md"
              onClick={handleResume}
            >
              <FontAwesomeIcon icon={faArrowRotateLeft}></FontAwesomeIcon>{" "}
              Resume
            </button>
          )}
          <button
            className="px-8 py-1 mx-2 bg-cyan-600 disabled:bg-cyan-800 rounded-md"
            disabled={timer === 0}
            onClick={handleSave}
          >
            <FontAwesomeIcon icon={faFloppyDisk}></FontAwesomeIcon> Save
          </button>
        </div>
      </main>
      <footer className="flex justify-center">
        <span className="pb-2 pt-16 text-sm text-gray-500">
          © GzTracker 2022 | @github.com/iamnepster
        </span>
      </footer>
    </div>
  )
}
