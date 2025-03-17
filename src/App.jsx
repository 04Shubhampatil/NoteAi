import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import ChatBox from "./Chatbox/ChatBox"
import Home from "./Pages/Home"
import AllSubjects from "./Pages/allSubjects"
import Subject from "./Pages/Subject"

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chatbox" element={<ChatBox />} />
            <Route path="/allSubjects" element={<AllSubjects />} />
            <Route path="/subject/:subjectName" element={<Subject />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

