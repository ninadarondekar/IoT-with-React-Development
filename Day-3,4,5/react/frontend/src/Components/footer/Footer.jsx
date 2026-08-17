import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
       <footer className="bg-cyan-700 text-white flex justify-around p-5">

    <div className="parts">
        <h3 className="text-2xl font-bold mb-3">About Us</h3>
        <p className="text-lg">React learning website</p>
    </div>

    <div className="parts">
        <h3 className="text-2xl font-bold mb-3">Quick Links</h3>

        <div className="flex flex-col gap-2">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>

    <div className="parts">
        <h3 className="text-2xl font-bold mb-3">Contact Us</h3>
        <p>Email: example@gmail.com</p>
        <p>Phone: 9876543210</p>
    </div>

</footer>
    </>

  )
}

export default Footer