import { useState } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Tickets from "./pages/Tickets"
import About from "./pages/About"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="py-5">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={Home} />
          <Route path="/about" element={About} />
          <Route path="/tickets" element={Tickets} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
