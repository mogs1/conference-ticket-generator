import { useState } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Tickets from "./pages/Tickets"
import About from "./pages/About"
import Events from "./pages/Events"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="py-5">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
