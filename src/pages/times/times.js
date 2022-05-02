import React from "react"
import { faArrowLeft, faFileExport } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import "./times.css"
import { useTimeStore } from "../../store/timeStore"
import { formatTime, secondsToHours } from "../../utils/timerFormatter"

export default function Times() {
  const times = useTimeStore((state) => state.times)

  return (
    <div className="times-container">
      <header className="flex justify-between w-full">
        <div className="mt-4 ml-8 px-4 py-2 rounded-md text-2xl hover:bg-gray-700">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </Link>
        </div>
        <div className="mt-4 mr-8 px-4 py-2 rounded-lg text-2xl hover:bg-gray-700">
          <FontAwesomeIcon icon={faFileExport}></FontAwesomeIcon>
        </div>
      </header>
      <main className="w-full px-8">
        {(times || []).map((work) => (
          <div className="w-full py-2 px-4 my-2 flex justify-between rounded-md bg-cyan-600">
            <span>{work.date}</span>
            <span>{formatTime(work.time)}h</span>
          </div>
        ))}
      </main>
      <footer className="flex justify-center">
        <span className="pb-2 pt-16 text-sm text-gray-500">
          © GzTracker 2022 | @github.com/iamnepster
        </span>
      </footer>
    </div>
  )
}
