import { Link } from "react-router-dom"
import {Cpu } from "lucide-react"

const iconMap = {
  "Computer Graphics": "https://cdn-icons-png.flaticon.com/512/1792/1792525.png",
  "Python Programming": "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  'Cloud Computing': "https://cdn-icons-png.flaticon.com/128/2316/2316109.png",
  "Cyber Security": "https://cdn-icons-png.flaticon.com/512/2716/2716652.png",
  Electronics: "https://cdn-icons-png.flaticon.com/128/4350/4350670.png",
  "Java Programming": "https://cdn-icons-png.flaticon.com/512/226/226777.png",
}

function SubCard({ subject }) {
  const iconUrl = iconMap[subject.name] || iconMap["Computer Graphics"]

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="relative">
        <img src={subject.img || "/placeholder.svg"} alt={subject.name} className="w-full h-48 object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <img src={iconUrl || "/placeholder.svg"} alt={`${subject.name} icon`} className="w-16 h-16 object-contain" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
          <img
            src={iconUrl || "/placeholder.svg"}
            alt={`${subject.name} icon`}
            className="w-6 h-6 mr-2 object-contain"
          />
          {subject.name}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{subject.description}</p>
        <Link
          to={`/subject/${subject.name}`}
          className="inline-flex items-center justify-center w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Ask AI <Cpu className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default SubCard

