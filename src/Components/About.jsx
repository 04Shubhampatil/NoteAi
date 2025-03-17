import React from 'react'

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">AI-Powered Notes App</h1>
        <p className="text-lg text-gray-600">
          Feel free to add, delete, and edit notes. The AI will help you find the most suitable notes for your query.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3">About This App</h2>
        <p className="text-gray-700">
          Our AI-powered Notes App is designed to revolutionize the way you organize and retrieve information. 
          By leveraging advanced artificial intelligence, this app not only allows you to create and manage notes 
          but also intelligently assists you in finding the most relevant information based on your queries. 
          Whether you're a student, professional, or anyone looking to enhance their note-taking experience, 
          our app provides a smart, efficient, and user-friendly solution to keep your thoughts and ideas 
          organized and easily accessible.
        </p>
      </div>
    </div>
  )
}

export default About
