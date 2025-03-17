import { useState } from "react"
import SubCard from "../Components/SubCard"
import { Search, BookOpen, GraduationCap } from "lucide-react"

function AllSubjects() {
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: "Computer Graphics",
      description: "Computer Graphics deals with the creation, storage, and manipulation of images and models using a computer.",
    },
    {
      id: 2,
      name: "Python Programming",
      description: "Python is a popular programming language used for web development, data analysis, and artificial intelligence.",
    },
    {
      id: 3,
      name: "Cloud Computing",
      description: "Cloud computing allows data and applications to be stored and accessed from anywhere in the world.",
    },
    {
      id: 4,
      name: "Cyber Security",
      description: "Cybersecurity focuses on protecting digital systems, networks, and data from cyber threats and attacks.",
    },
    {
      id: 5,
      name: "Electronics",
      description: "Electronics involves studying conductors, semiconductors, and designing electronic devices.",
    },
    {
      id: 6,
      name: "Java Programming",
      description: "Java is a popular programming language used for web development, data analysis, and artificial intelligence.",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const filteredSubjects = subjects.filter((subject) => 
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-10 h-10 text-indigo-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Subject Notes
              </h1>
            </div>
            <p className="text-gray-600">Access comprehensive study materials for all subjects</p>
          </div>

          <div className="mb-12 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search subjects..."
                className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-xl shadow-md 
                focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent pl-12 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-4 text-indigo-400 w-5 h-5" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubjects.map((subject) => (
              <SubCard key={subject.id} subject={subject} />
            ))}
          </div>

          {filteredSubjects.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 text-indigo-300 mx-auto mb-4" />
              <p className="text-gray-600">No subjects found. Try a different search term.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllSubjects