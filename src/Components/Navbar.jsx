"use client"

import { useState } from "react"
import { Home, Info, MessageCircle, Menu, X, BookOpen } from "lucide-react"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white border-b border-gray-700">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400">NoteAI</span>
          </a>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`
            md:flex md:items-center md:space-x-8
            ${isMenuOpen ? "block" : "hidden"}
            absolute md:relative top-16 md:top-0
            left-0 right-0 
            bg-gray-800 md:bg-transparent
            p-4 md:p-0 
            shadow-lg md:shadow-none
            space-y-3 md:space-y-0
            z-50
            border-t md:border-0 border-gray-700
          `}>
            {[
              { href: "/", icon: Home, text: "Home" },
              { href: "/about", icon: Info, text: "About" },
              { href: "/chatbox", icon: MessageCircle, text: "ChatBox" }
            ].map(({ href, icon: Icon, text }) => (
              <li key={text}>
                <a
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Icon size={18} className="text-blue-400" />
                  <span>{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;