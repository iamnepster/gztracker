import React from "react"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import "./times.css"
import { usePerformedWorkStore } from "../../store/timeStore"
import { formatTime } from "../../utils/timerFormatter"
import dayjs from "dayjs"

export default function Times() {
  const performedWorkList = usePerformedWorkStore(
    (state) => state.performedWorkList
  )

  return (
    <div className="times-container">
      <header className="flex justify-between w-full">
        <div className="mt-4 ml-8 px-4 py-2 rounded-md text-2xl hover:bg-gray-700">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </Link>
        </div>
        <div className="mt-4 mr-8 px-4 py-2 rounded-lg text-2xl hover:bg-gray-700">
          {/*<FontAwesomeIcon icon={faFileExport}></FontAwesomeIcon>*/}
        </div>
      </header>
      <main className="w-full px-8 scroll-container">
        {(performedWorkList || []).map((performedWork) => (
          <div
            key={performedWork.id}
            className="w-full py-2 px-4 my-2 flex justify-between rounded-md bg-cyan-600"
          >
            <span>{dayjs(performedWork.date).format("DD MMM YYYY")}</span>
            <span>{formatTime(performedWork.timeInSeconds)}h</span>
          </div>
        ))}
      </main>
      <footer className="flex justify-center">
        <span className="pb-2 pt-8 text-sm text-gray-500">
          © GzTracker 2022 | @github.com/iamnepster
        </span>
      </footer>
    </div>
  )
}
