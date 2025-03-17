import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate(); // onclick button
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Welcome Section */}
      <section className="text-center p-6">
        <h1 className="text-4xl font-bold text-blue-700">Note Ai</h1>
        <img
          src="https://www.online-notepad.net/assets/imgs/Icons/content-img.svg"
          alt="Book illustration"
          className="my-4 mx-auto w-60 h-60"
        />
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Welcome to Note Ai, a digital tool that helps you create, organize, and share your notes. With its powerful AI-powered search engine, you'll find the perfect note to help you stay on track.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
        onClick={()=>(navigate('/allSubjects'))} //use here
        >
          Get Started
        </button>
      </section>

      {/* Feature Section */}
      <section className="mt-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Overview of Booknotes</h2>
        <p className="text-gray-700">
          AI-powered book summarization app that delivers key insights.
        </p>
        <h3 className="text-xl mt-6">Key Features and Benefits:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Efficient AI-generated book summaries.</li>
          <li>Enhanced productivity with searchable notes.</li>
          <li>Collaborative note-sharing options.</li>
        </ul>
      </section>

      {/* Chat Box Placeholder */}
      <section className="mt-8 p-4 bg-gray-200 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-2">Interactive Chat Box</h2>
        <p className="text-gray-700">Coming soon: Interact with our AI to prompt notes and organize ideas seamlessly!</p>
      </section>
    </div>
  );
}

export default Home;
