import React from 'react'
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';

const App = () => {
  return (
  //  React fragment is used to group multiple elements without adding extra nodes to the DOM
   <>
   <div className="min-h-screen flex flex-col">

    <Navbar />

    <main className="flex-1">
        <main className="flex-1">
    <section className="text-center py-20 bg-cyan-50">
        <h1 className="text-5xl font-bold text-cyan-700">
            Welcome to the React App
        </h1>

        <p className="text-xl text-gray-600 mt-4">
            Learn React and build amazing websites.
        </p>

        <button className="bg-cyan-700 text-white px-6 py-3 mt-6 rounded-lg">
            Get Started
        </button>
    </section>
</main>
    </main>

    <Footer />

    </div>
   </>
  )
}

export default App