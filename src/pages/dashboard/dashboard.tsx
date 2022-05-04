import * as React from "react"
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
import { usePerformedWorkStore } from "../../store/performedWorkStore"
import { Link } from "react-router-dom"
import { v4 as uuid } from "uuid"
import * as dayjs from "dayjs"
import { PerformedWorkModel } from "../../model/PerformedWorkModel"
import { useEffect } from "react"
import { useTimerStore } from "../../store/timerStore"

export default function Dashboard() {
  const addPerformedWork = usePerformedWorkStore(
    (state) => state.addPerformedWork
  )
  const timerState = useTimerStore((state) => state.timer)
  const setTimerState = useTimerStore((state) => state.setTimerState)

  // @ts-ignore
  window.electronApi.onPause(() => {
    console.log("test")

    handleStop()
  })
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handleStop,
    handleResume,
    handleReset,
  } = useTimer(timerState)

  useEffect(() => {}, [handleStop])

  useEffect(
    () => setTimerState({ timer, isActive, isPaused }),
    [timer, isActive, isPaused, setTimerState]
  )

  const handleSave = () => {
    const performedWork: PerformedWorkModel = {
      id: uuid(),
      time: timer,
      date: dayjs().format(),
    }

    // @ts-ignore
    window.electronApi.persistData(performedWork)

    addPerformedWork(performedWork)
    console.log(performedWork)
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
