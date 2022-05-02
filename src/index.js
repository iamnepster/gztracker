import React from "react"
import ReactDOM from "react-dom/client"
import Times from "./pages/times/times"
import Dashboard from "./pages/dashboard/dashboard"
import "./index.css"
import { HashRouter, Route, Routes } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/times" element={<Times />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
