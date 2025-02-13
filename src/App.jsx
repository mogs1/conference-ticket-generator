
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Tickets from "./pages/Tickets"
import About from "./pages/About"
import Events from "./pages/Events"

function App() {
  return (
    <div className="p-5 overflow-x-hidden">
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
